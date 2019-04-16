<?php

/**
 * @Author: Administrator
 * @Date:   2018-11-14 11:22:45
 * @Last Modified by:   Administrator
 * @Last Modified time: 2019-03-19 21:47:36
 */
namespace app\home\model;
use think\Model;
// 老师表
class WzTeacher extends Model
{
    protected $name = 'wz_teacher';
    /**
     * @function [根据id获取详情]
     * @Author   JFY
     * @DateTime 2019-03-14T10:03:21+0800
     * @return   [type]                   [description]
     */
    public function get_info( $id ){
    	return $this->where('id',$id)->find();
    }

    public function get_list(){
        return $this->select()->toArray();
    }
}