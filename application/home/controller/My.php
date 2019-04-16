<?php
namespace app\home\controller;
// 课程表
use app\home\model\WzCourse;
// 学科表
use app\home\model\WzClassType;
// 前台用户表
use app\home\model\WzUser;
// 订单表
use app\home\model\WzOrder;
// 老师表
use app\home\model\WzTeacher;
// 包表
use app\home\model\WzPackage;
// 个人中心
class My extends Common{
    public function initialize(){
    	// 课程表
        $this->course_model = new WzCourse();
    	// 前台用户表
        $this->user_model = new WzUser();
        // 学科表
        $this->classType_model = new WzClassType();
        // 学科列表
        $this->classType_list = $this->classType_model->get_list();
        // 订单表
        $this->order_model = new WzOrder();
        // 老师表
        $this->teacher_model = new WzTeacher();
        // 包表
        $this->package_model = new WzPackage();
        $this->assign([
            'classType_list'    => $this->classType_list,
        ]);
        parent::initialize();
    }
    // 个人中心
    public function index(){
    	if(empty($this->uid)){
    		$this->redirect('home/user/login');
    	}else{
    		$user_info = $this->user_model->where('id',$this->uid)->find();
    		$this->assign([
    			'user_info'	=> $user_info,
    		]);
    	}
    	return $this->fetch();
    }

    /**
     * @function [我的课程]
     * @Author   JFY
     * @DateTime 2019-04-11T17:46:00+0800
     * @return   [type]                   [description]
     */
    public function course_list(){

        $data = input();

        // 成功订单列表
        $order_list = $this->order_model->where('user_id',$this->uid)->where('status',1)->where('course_id','<>','')->select()->toArray();
        // 老师列表
        $teacher_list = $this->teacher_model->select();

        $course_list = [];
        foreach ($order_list as $key => $val) {
            if(!empty($val['course_id'])){
                // 课程
                if(empty($data['course_type'])){
                    $course_list = $this->course_model->where('id',$val['course_id'])->select()->toArray();
                }else{
                    $course_list = $this->course_model->where('id',$val['course_id'])->where('class_type_id',$data['course_type'])->select()->toArray();
                }
            }
        }

        foreach ($course_list as $key => &$val) {
            foreach ($teacher_list as $key2 => $val2) {
                if($val['teacher_id']==$val2['id']){
                    $val['teacher_name'] = $val2['name'];
                }
            }
        }

        $this->assign([
            'course_list'   => $course_list
        ]);
    	return $this->fetch();
    }

    /**
     * @function [我的订单]
     * @Author   JFY
     * @DateTime 2019-04-11T17:46:23+0800
     * @return   [type]                   [description]
     */
    public function order_list(){

        $data = input();
        $order_type = [
            1 => '课程',
            2 => '课程包'
        ];
        if($data['order_type']==1){
            // 课程
            $order_list = $this->order_model->where('user_id',$this->uid)->where('course_id','<>','')->order('add_time desc')->select();
            foreach ($order_list as $key => $val) {
                $course_list = $this->course_model->where('id',$val['course_id'])->select();
            }

            foreach ($order_list as $key => &$val) {
                foreach ($course_list as $key2 => $val2) {
                    if($val['course_id']==$val2['id']){
                        $val['pic'] = $val2['pic'];
                        $val['title'] = $val2['title'];
                    }
                    if($val['status']==1){
                        $val['status'] = '<font color="green;">已完成</font>';
                    }elseif ($val['status']==2) {
                        $val['status'] = '<font color="blue;">未完成</font>';
                    }else{
                        $val['status'] = '<font color="red;">已失效</font>';
                    }
                }
            }



        }else if($data['order_type']==2){
            // 课程包
            $order_list = $this->order_model->where('user_id',$this->uid)->where('package_id','<>','')->order('add_time desc')->select();

            foreach ($order_list as $key => $val) {
                $package_list = $this->package_model->where('id',$val['package_id'])->select();
            }

            foreach ($order_list as $key => &$val) {
                foreach ($package_list as $key2 => $val2) {
                    if($val['package_id']==$val2['id']){
                        $val['pic'] = $val2['pic'];
                        $val['title'] = $val2['title'];
                    }
                    if($val['status']==1){
                        $val['status'] = '<font color="green;">已完成</font>';
                    }elseif ($val['status']==2) {
                        $val['status'] = '<font color="blue;">未完成</font>';
                    }else{
                        $val['status'] = '<font color="red;">已失效</font>';
                    }
                }
            }
        }

        $this->assign([
            'order_type'    => $order_type,
            'order_list'    => $order_list
        ]);
    	return $this->fetch();
    }
}