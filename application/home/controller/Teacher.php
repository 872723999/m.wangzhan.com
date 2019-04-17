<?php
namespace app\home\controller;
// 老师表
use app\home\model\WzTeacher;
// 课程表
use app\home\model\WzCourse;
// 订单表
use app\home\model\WzOrder;
// 老师
class Teacher extends Common{
    
    public function initialize(){
        // 老师表
        $this->teacher_model = new WzTeacher();
        // 课程表
        $this->course_model = new WzCourse();
        // 订单表
        $this->order_model = new WzOrder();

        parent::initialize();
    }

    // 老师详情
    public function info( $id ){
        $info = $this->teacher_model->get_info( $id );
        // 推荐老师列表
        $tui_list = $this->teacher_model->where('id','<>',$id)->limit(3)->select()->toArray();
        // 课程列表
        $course_list = $this->course_model->where('teacher_id',$id)->paginate(config('pageSize'),false,['query' => request()->param()]);
        foreach ($course_list as $key => &$val) {
            $val['buy_num'] = $this->order_model->get_num(['course_id'=>$val['id']]);
        }
        $this->assign([
            'info'  => $info,
            'tui_list'  => $tui_list,
            'course_list'   => $course_list
        ]);

        return $this->fetch();
    }


    // 老师列表
    public function list(){

        $list = $this->teacher_model->paginate(config('pageSize'),false,['query' => request()->param()]);
        $this->assign([
            'list'  => $list
        ]);

        return $this->fetch();
    }

}