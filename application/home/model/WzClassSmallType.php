<?php

/**
 * @Author: Administrator
 * @Date:   2018-11-14 11:22:45
 * @Last Modified by:   Administrator
 * @Last Modified time: 2019-03-13 21:53:39
 */
namespace app\home\model;
use think\Model;
// 学科小类表
class WzClassSmallType extends Model
{
    protected $name = 'wz_find_class_small_type';

    /**
     * @function [获取列表]
     * @Author   JFY
     * @DateTime 2019-02-23T14:35:57+0800
     * @return   [type]                   [description]
     */
    public function get_list( $class_type_id=null ){
        if($class_type_id==0){
            // 查询全部小类
            return change_key($this->field('id,title')->where('id','>',0)->select()->toArray());
        }else{
            // 根据id查询小类
            return change_key($this->field('id,title')->where('class_type_id','like',"%" . $class_type_id . "%")->select()->toArray());
        }
    }
}