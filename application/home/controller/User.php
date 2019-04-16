<?php
namespace app\home\controller;
use app\api\controller\Base;
// 前台用户表
use app\home\model\WzUser;
// 验证码
use think\captcha\Captcha;
// 验证器
use think\Validate;
use think\Controller;
use think\facade\Session;
class User extends Controller{
    public function initialize(){
    	// 前台用户表
        $this->user_model = new WzUser();
        parent::initialize();
    }

    public function login(){
        return $this->fetch();
    }

    /**
     * @function [登录]
     * @Author   JFY
     * @DateTime 2019-02-21T09:19:02+0800
     * @return   [type]                   [description]
     */
    public function do_login( $data ){
        $rule = [
            'user_name'        => 'require',
            'user_pwd'     => 'require',
        ];

        $msg = [
            'user_name.require'              => '用户名不能为空',
            'user_pwd.require'     => '用户密码不能为空',
        ];

        $check_data = [
            'user_name'           => $data['user_name'],
            'user_pwd'     => $data['user_pwd'],
        ];

        $validate   = Validate::make($rule,$msg);
        $result = $validate->check($check_data);

        if(!$result) {
            json_msg(-1,$validate->getError());
        }

        $user_info = $this->user_model->where('user_name',$data['user_name'])->find();
        
        if( empty($user_info) ){
            json_msg(-1,'账号不存在，请重试！');
        }

        if( password_verify($data['user_pwd'],$user_info['user_pwd']) ){
            // 用户id存入session
            session('uid',$user_info['id'],'think');
            return json_msg(2,'登录成功',$user_info);

        }else{
            return json_msg(-1,'密码错误');
        }
    }

    /**
     * @function [注册]
     * @Author   JFY
     * @DateTime 2019-02-21T09:19:23+0800
     * @return   [type]                   [description]
     */
    public function register( $data ){
        $rule = [
            'user_name'        => 'require',
            'user_pwd'     => 'require',
        ];

        $msg = [
            'user_name.require'              => '用户名不能为空',
            'user_pwd.require'     => '用户密码不能为空',
        ];

        $check_data = [
            'user_name'           => $data['user_name'],
            'user_pwd'     => $data['user_pwd'],
        ];

        $validate   = Validate::make($rule,$msg);
        $result = $validate->check($check_data);

        // 验证码
        // if(!captcha_check($data['captcha'])){
            // 验证失败
        // };

        if(!$result) {
            json_msg(-1,$validate->getError());
        }

        $is_exists = $this->user_model->where('user_name',$data['user_name'])->count();
        if(!empty($is_exists)){
            json_msg(-1,'该账号已经存在，请重试！');
        }

        $res = $this->user_model->save([
            'user_name' => $data['user_name'],
            'user_pwd' => password_hash($data['user_pwd'],PASSWORD_DEFAULT),
            'add_time'  => time()
        ]);
        
        if( $res ){
            // 用户id存入session
            session('uid',$this->user_model->id,'think');
            return json_msg(1,'注册成功',['user_id'=>$this->user_model->id]);
        }else{
            return json_msg(-1,'注册失败');
        }
    }

    // 验证码
    public function verify(){
        $captcha = new Captcha();
        return $captcha->entry();    
    }

    /**
     * @function [退出]
     * @Author   JFY
     * @DateTime 2019-02-21T15:06:34+0800
     * @param    [type]                   $user_name [用户名]
     * @return   [type]                              [description]
     */
    public function login_out(){
        $data = input();
        session('uid',null,'think');
        $this->redirect('home/user/login');
    }


    public function check_mobile(){
        $data = input();
        if( isset($data['user_name']) && !empty($data['user_name']) ){
            $user_info = $this->user_model->where('user_name',$data['user_name'])->find();
            if(empty($user_info)){
                // 注册
                $this->register($data);
            }else{
                // 登录
                $this->do_login($data);
            }
        }
    }

    // 忘记密码
    public function wjpwd(){
        $data = input();
        if( !empty($data) ){
            $user_info = $this->user_model->where('user_name',$data['user_name'])->find();
            $editData['user_pwd'] = password_hash($data['user_pwd'],PASSWORD_DEFAULT);
            $res = $this->user_model->save( $editData, ['id'=>$user_info['id']] );
            if($res){
                return json_msg(2,'修改成功');
            }else{
                return json_msg(1,'修改失败，请重试');
            }
        }
        return $this->fetch();
    }
}