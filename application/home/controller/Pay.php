<?php
namespace app\home\controller;
// 课程表
use app\home\model\WzCourse;
// 学科表
use app\home\model\WzClassType;
// 前台用户表
use app\home\model\WzUser;
// 包表
use app\home\model\WzPackage;
// 订单表
use app\home\model\WzOrder;
// 支付
class Pay extends Common{
    public function initialize(){
    	// 课程表
        $this->course_model = new WzCourse();
    	// 前台用户表
        $this->user_model = new WzUser();
        // 学科表
        $this->classType_model = new WzClassType();
        // 包表
        $this->packag_model = new WzPackage();
        // 订单表
        $this->order_model = new WzOrder();
        // 学科列表
        $this->classType_list = $this->classType_model->get_list();
        $this->assign([
            'classType_list'    => $this->classType_list,
        ]);
        parent::initialize();
    }
    /**
     * @function [预支付页面]
     * @Author   JFY
     * @DateTime 2019-04-12T13:46:32+0800
     * @return   [type]                   [description]
     */
    public function index(){

    	if(empty($this->uid)){
    		$this->redirect('home/user/login');
    	}else{
            if( !empty($_GET['package_id']) ){
                // 课程包
                $info = $this->packag_model->where('id',$_GET['package_id'])->find();
                $info['order_type'] = 1;
                // 订单号=用户id+购买类型(1)+商品（课程，课程包）id
                $order_num = $this->uid.'_1'.'_'.$_GET['package_id'];
            }
            if( !empty($_GET['course_id']) ){
                // 课程
                $info = $this->course_model->where('id',$_GET['course_id'])->find();
                $info['order_type'] = 2;
                // 订单号=用户id+购买类型(2)+商品（课程，课程包）id
                $order_num = $this->uid.'_2'.'_'.$_GET['course_id'];
            }
			// 删除未完成的相同订单号的订单
          	$this->order_model->where('order_num',$order_num)->where('status','<>','1')->delete();
          
            $this->create_order([
                'id' => $info['id'],
                'order_type' => $info['order_type'],
                'add_time'  => time(),
                'user_id'   => $this->uid,
                'sum_price' => $info['price'],
                'order_num' => $order_num
            ]);

            $this->assign([
                'info' => $info,
                'order_num' => $order_num,
            ]);
    	}
    	return $this->fetch();
    }

    /**
     * @function [创建订单]
     * @Author   JFY
     * @DateTime 2019-04-11T20:22:02+0800
     * @return   [type]                   [description]
     */
    private function create_order( $param ){

        $is_exists = $this->order_model->where('order_num',$param['order_num'])->where('status',1)->find();
        if( !$is_exists ){
            $addData = [];
            foreach ($param as $key => $val) {
                $addData[$key] = $val;
                if($param['order_type']==1){
                    // 课程包
                    $addData['package_id'] = $param['id'];
                }else{
                    // 课程
                    $addData['course_id'] = $param['id'];
                }
            }
            unset($addData['id']);
            unset($addData['order_type']);
            $this->order_model->save($addData);
        }
    }

    /**
     * @function [修改支付类型]
     * @Author   JFY
     * @DateTime 2019-04-12T15:43:21+0800
     * @return   [type]                   [description]
     */
    public function edit_pay_type(){
        $data = input();
        $order_info = $this->order_model->where('order_num',$data['order_num'])->find();
        if($order_info){
            $editData['price_type'] = $data['price_type'];
            $res = $this->order_model->save($editData,['id'=>$order_info['id']]);
        }
    }
}