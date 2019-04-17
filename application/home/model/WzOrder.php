<?php

/**
 * @Author: Administrator
 * @Date:   2018-11-14 11:22:45
 * @Last Modified by:   Administrator
 * @Last Modified time: 2019-04-17 11:13:24
 */
namespace app\home\model;
use think\Model;
// 订单表
class WzOrder extends Model
{
    protected $name = 'wz_order';
    
    /**
     * @function [根据课程id或者课程包的id统计一下订单数]
     * @Author   JFY
     * @DateTime 2019-04-17T10:30:06+0800
     * @return   [type]                   [description]
     */
    public function get_num( $param ){
    	if( isset($param['course_id']) && !empty($param['course_id']) ){
    		$num = $this->where('course_id',$param['course_id'])->where('status',1)->count();
    	}else{
    		$num = $this->where('package_id',$param['package_id'])->where('status',1)->count();
    	}
    	return $num;
    }
}