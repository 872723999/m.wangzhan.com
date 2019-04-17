<?php
namespace app\home\controller;
// 课程表
use app\home\model\WzCourse;
// 老师表
use app\home\model\WzTeacher;
// 部分表
use app\home\model\WzPart;
// 学科表
use app\home\model\WzClassType;
// 学科小类表
use app\home\model\WzClassSmallType;
// 包表
use app\home\model\WzPackage;
// 订单表
use app\home\model\WzOrder;

use think\db;

// 课程
class Course extends Common{
    public function initialize(){
        parent::initialize();
        // 课程表
        $this->course_model = new WzCourse();
        // 老师表
        $this->teacher_model = new WzTeacher();
        // 部分表
        $this->part_model = new WzPart();
        // 学科表
        $this->classType_model = new WzClassType();
        // 学科小类表
        $this->classSmallType_model = new WzClassSmallType();
        // 包表
        $this->package_model = new WzPackage();
        // 订单表
        $this->order_model = new WzOrder();
        // 学科列表
        $classType_list = $this->classType_model->get_list();
        // 学科小类列表
        // $classSmallType_list = $this->classSmallType_model->get_list();

        $this->assign([
            'classType_list'    => $classType_list,
            // 'classSmallType_list'   => $classSmallType_list,
        ]);
    }

    /**
     * @function [根据id获取课程信息]
     * @Author   JFY
     * @DateTime 2019-03-14T13:50:13+0800
     * @param    [type]                   $id [description]
     * @return   [type]                       [description]
     */
    public function info( $id ){
        // 课程列表
        $info = $this->course_model->get_info($id);
        // 老师信息
        $teacher_info = $this->teacher_model->get_info($info['teacher_id']);

        // 课程k，章节z，部分b关联
        $course_list = Db::name('wz_find_course')
            ->alias('k')
            ->field('b.id,b.title as b_title,z.title as z_title,k.title as k_title,k.introduction as k_introduction,z.id as z_id, b.title as b_title,b.video as b_video')
            ->leftjoin('wz_find_class_chapter z','z.course_id = k.id')
            ->leftjoin('wz_find_class_part b','b.chapter_id = z.id')
            ->where('k.id',$id)
            ->select();

        $tmp_arr = [];
        foreach ($course_list as $key => $val) {
            if(!empty($val['z_id'])){
                $tmp_arr[$val['z_id']]['children'][] = $val;
                $tmp_arr[$val['z_id']]['z_title'][] = $val['z_title'];
            }
        }

        foreach ($tmp_arr as $key => $val) {
            $count += count($val['children']);
        }
        // dump($tmp_arr);die;
        // 推荐课程
        $tui_course_list = $this->course_model->where('id','<>',$id)->where('class_type_id',$info['class_type_id'])->where('class_small_type_id',$info['class_small_type_id'])->limit(3)->select()->toArray();
        

        // 判断当前课程是否已经解锁
        $lock_info = $this->order_model->where('course_id',$id)->where('user_id',$this->uid)->where('status',1)->find();

        // 判断当前课程是否包含在已经购买的课程包中
        $course_ids_arr = [];
        $package_list = $this->order_model->where('user_id',$this->uid)->where('status',1)->where('package_id','<>','')->select();
        
        $package_ids = '';
        foreach ($package_list as $key => $val) {
            $package_tmp_ids .= $val['package_id'] . ',';
        }
        $package_ids = rtrim($package_tmp_ids,',');
        $course_tmp_ids = '';
        $package_list = $this->package_model->field('course_ids')->whereIn('id',$package_ids)->select();
        if(!empty($package_list)){
            foreach ($package_list as $key => $val) {
                $course_tmp_ids .= $val['course_ids'] . ',';
            }
            $course_arr = explode(',',rtrim($course_tmp_ids,','));
            foreach ($course_arr as $key => $val) {
                $tmp_ids_arr[$val] = $val;
            }
            $course_ids_arr = array_unique($tmp_ids_arr);
        }

        if( !empty($lock_info) || in_array($id,$course_ids_arr) ){
            $is_lock = 1;
        }else{
            $is_lock = 0;
        }

        $this->assign([
            'info'  => $info,
            'teacher_info'  => $teacher_info,
            'course_list'   => $tmp_arr,
            'count'         => $count,
            'tui_course_list'   => $tui_course_list,
            'is_lock'   => $is_lock
        ]);
        return $this->fetch();
    }

    // 视频页面
    public function video(){
        $data = input();
        if(isset($data['course_id']) && !empty($data['course_id'])){
            // 课程列表
            // $info = $this->course_model->get_info($data['kecheng_id']);

            // 老师信息
            // $teacher_info = $this->teacher_model->get_info($info['teacher_id']);

            // 根据课程去查下面所有的部分

            $course_list = Db::name('wz_find_course')
            ->alias('k')
            ->field('b.id,b.title as b_title,z.title as z_title,k.title as k_title,k.introduction as k_introduction,z.id as z_id, b.title as b_title,b.video as b_video')
            ->leftjoin('wz_find_class_chapter z','z.course_id = k.id')
            ->leftjoin('wz_find_class_part b','b.chapter_id = z.id')
            ->where('k.id',$data['course_id'])
            ->select();

            // 推荐课程
            $tui_list = $this->course_model->where('id','<>',$data['course_id'])->limit(2)->select();
            
        }else{
            // 根据部分去查找课程，然后去查这个课程下面所有的部分
                // 部分
            $part_info = $this->part_model->where('id',$data['bufen_id'])->find();
                // 章节
            $chapter_info = Db::name('wz_find_class_chapter')->where('id',$part_info['chapter_id'])->find();
                // 课程
            $course_info = $this->course_model->where('id',$chapter_info['course_id'])->find();

            // 课程k，章节z，部分b关联
            $course_list = Db::name('wz_find_course')
            ->alias('k')
            ->field('b.id,b.title as b_title,z.title as z_title,k.title as k_title,k.introduction as k_introduction,z.id as z_id, b.title as b_title,b.video as b_video')
            ->leftjoin('wz_find_class_chapter z','z.course_id = k.id')
            ->leftjoin('wz_find_class_part b','b.chapter_id = z.id')
            ->where('k.id',$course_info['id'])
            ->select();
        }
        $this->assign([
            'part_info' =>  $part_info,
            'course_list'   => $course_list,
            'tui_list'  => $tui_list
        ]);
        return $this->fetch();
    }

    // 课程列表页
    public function course_list(){
        $data = input();
        // 查询条件
        $map = [];
        // 学科
        if( !empty($data['classType_id']) && $data['classType_id'] !=0 ){
            $map['class_type_id'] = $data['classType_id'];
        }
        // 学科小类
        if(!empty($data['classSmallType_id']) && $data['classSmallType_id'] !=0 ){
            $map['class_small_type_id'] = $data['classSmallType_id'];
        }
        // 教学类型
        if( !empty($data['teaching_type']) && $data['teaching_type'] !=0 ){
            $map['teaching_type'] = $data['teaching_type'];
        }

        // 课程列表
        if(empty($data['keywords'])){
            $course_list = Db::name('wz_find_course')->where( $map )->paginate(config('pageSize'),false,['query' => request()->param()]);
        }else{
            $course_list = Db::name('wz_find_course')->where( $map )->where('title','like',"%".$data['keywords']."%")->paginate(config('pageSize'),false,['query' => request()->param()]);
        }

        // 查询学科下面的学科小类
        if(!empty($data['classType_id'])){
            $classSmallType_list = $this->classSmallType_model->get_list( $data['classType_id'] );
        }else{
            $classSmallType_list = $this->classSmallType_model->get_list();
        }

        // 教学类型
        $teaching_type = config('teaching_type');

        // 学科表
        $this->assign([
            'course_list'           =>  $course_list,
            'classSmallType_list'   =>  $classSmallType_list,
            'teaching_type'         =>  $teaching_type,
        ]);

        return $this->fetch();
    }

    // 课程包列表
    public function bao_list(){
        $data = input();
        // 全部
        $map = [];
        if( !empty($data['classType_id']) && $data['classType_id'] !=0 ){
            $map['class_type_id'] = $data['classType_id'];
        }

        if(empty($data['keywords'])){
            $bao_list = $this->package_model->where( $map )->paginate(config('pageSize'),false,['query' => request()->param()]);
        }else{
            $bao_list = $this->package_model->where( $map )->where('title','like',"%".$data['keywords']."%")->paginate(config('pageSize'),false,['query' => request()->param()]);
        }

        foreach ($bao_list as $key => &$val) {
            $val['buy_num'] = $this->order_model->get_num(['package_id'=>$val['id']]);
        }

        $this->assign([
            'bao_list'  =>  $bao_list
        ]);

        return $this->fetch();
    }

    // 课程包详情
    public function bao_info( $id ){
        $package_info = $this->package_model->where('id',$id)->find();

        $course_num = count(explode(',',$package_info['course_ids']));
        // 包下面的课程
        $course_list = $this->course_model->whereIn('id',$package_info['course_ids'])->select()->toArray();
        foreach ($course_list as $key => &$val) {
            $val['buy_num'] = $this->order_model->get_num(['course_id'=>$val['id']]);
        }

        // 推荐老师
        $tui_teacher_list = $this->teacher_model->limit(2)->select()->toArray();

        $package_info['buy_num'] = $this->order_model->get_num(['package_id'=>$id]);

        $this->assign([
            'info'  => $package_info,
            'course_list'   => $course_list,
            'course_num'    => $course_num,
            'tui_teacher_list'  => $tui_teacher_list
        ]);
        return $this->fetch();
    }

}