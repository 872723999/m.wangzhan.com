<?php
namespace app\home\controller;
// 课程类型表
use app\home\model\WzClassType;
// 课程表
use app\home\model\WzCourse;
// 课程包
use app\home\model\WzPackage;
// 文章表
use app\home\model\WzArticle;
use think\Controller;
class Index extends Common{
    public function initialize(){
    	// 学科表
        $this->class_type_model = new WzClassType();
        // 课程表
    	$this->course_model = new WzCourse();
        // 课程包
        $this->package_model = new WzPackage();
        // 文章表
        $this->article_model = new WzArticle();
        // 学科列表
        $classType_list = $this->class_type_model->get_list();

        $this->assign([
            'classType_list'    => $classType_list,
        ]);
        parent::initialize();
    }
    public function index(){
        $data = input();
        // 学科列表
    	$list = $this->class_type_model->get_list();

        // 全部课程列表
        // $course_list = $this->course_model->get_list('id,title,describe,price,pic,cang,class_type_id');
        // 法考专项课程
        $course_list1 = $this->course_model->get_list('id,title,describe,price,pic,cang,class_type_id',1);
        // 法考真题解析课程
        $course_list2 = $this->course_model->get_list('id,title,describe,price,pic,cang,class_type_id',2);
        // 法考免费试听课
        $course_list3 = $this->course_model->get_list('id,title,describe,price,pic,cang,class_type_id',3);
        // 课程包列表
        $package_list = $this->package_model->where('is_tui',1)->limit(1)->select()->toArray();
        // 文章表
        $article_list = $this->article_model->where('is_tui',1)->select()->toArray();
        
        $this->assign([
            'list'  => $list,
            'course_list1'   => $course_list1,
            'course_list2'   => $course_list2,
            'course_list3'   => $course_list3,
            'package_list'  => $package_list[0],
            'article_list'  => $article_list
        ]);
        return $this->fetch();
    }
}