<?php

/**
 * @Author: Administrator
 * @Date:   2018-11-14 11:22:45
 * @Last Modified by:   Administrator
 * @Last Modified time: 2019-04-17 14:43:23
 */
namespace app\home\model;
use think\Model;
// 课程表
class WzCourse extends Model
{
    protected $name = 'wz_find_course';
    // 获取列表
    public function get_list( $field="*", $class_type_id=0 ){
    	if(!empty($class_type_id)){
    		$list = $this->field( $field )->where('class_type_id',$class_type_id)->where('is_tui',1)->limit(8)->select()->toArray();
    	}else{
    		$list = $this->field( $field )->where('class_type_id','<>','')->where('is_tui',1)->limit(8)->select()->toArray();
    	}
    	foreach ($list as $key => &$val) {
    		$val['pic'] = config('admin_path') . $val['pic'];
    	}
    	return $list;
    }

    /**
     * @function [根据课程id获取详情]
     * @Author   JFY
     * @DateTime 2019-03-13T23:23:13+0800
     * @return   [type]                   [description]
     */
    public function get_info( $id ){
    	$info = $this->where('id',$id)->find();
    	$info['pic'] = config('admin_path') . $info['pic'];
    	return $info;
    }

}