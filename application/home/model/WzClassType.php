<?php

/**
 * @Author: Administrator
 * @Date:   2018-11-14 11:22:45
 * @Last Modified by:   Administrator
 * @Last Modified time: 2019-03-13 21:53:39
 */
namespace app\home\model;
use think\Model;
// 学科表
class WzClassType extends Model
{
    protected $name = 'wz_find_class_type';

    /**
     * @function [获取列表]
     * @Author   JFY
     * @DateTime 2019-02-23T14:35:57+0800
     * @return   [type]                   [description]
     */
    public function get_list(){
    	return change_key($this->field('id,title')->select()->toArray());
    }
}