<?php
namespace app\home\controller;
use app\home\model\WzArticle;
// 文章
class Article extends Common{
    
    public function initialize(){
        parent::initialize();
        $this->article_type = [
            1 => '刑法',
            2 => '宪法',
            3 => '民法',
        ];

        // 文章表
        $this->article_model = new WzArticle();
        // 文章类型列表
        $this->assign([
            'article_type'  => $this->article_type,
        ]);
    }

    // 文章详情
    public function info( $id ){
        $info = $this->article_model->where('id',$id)->find();
        // 访问量
        $this->article_model->save(['show_num'=>$info['show_num']+1],['id'=>$info['id']]);
        // 推荐列表
        $tui_list = $this->article_model->where('id','<>',$id)->limit(6)->select()->toArray();

        $this->assign([
            'info'  => $info,
            'tui_list'  => $tui_list
        ]);
        return $this->fetch();
    }


    // 文章列表
    public function article_list(){
        $data = input();
        $map = [];
        // 学科
        if( !empty($data['article_type']) && $data['article_type'] !=0 ){
            $map['article_type'] = $data['article_type'];
        }
        $list = $this->article_model->where( $map )->paginate(config('pageSize'),false,['query' => request()->param()]);

        $this->assign([
            'list'  => $list
        ]);
        return $this->fetch();
    }

}