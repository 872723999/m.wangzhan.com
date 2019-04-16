
-- -----------------------------
-- Table structure for `clt_ad`
-- -----------------------------
DROP TABLE IF EXISTS `clt_ad`;
CREATE TABLE `clt_ad` (
  `ad_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL DEFAULT '' COMMENT '广告名称',
  `type_id` tinyint(5) NOT NULL COMMENT '所属位置',
  `pic` varchar(200) NOT NULL DEFAULT '' COMMENT '广告图片URL',
  `url` varchar(200) NOT NULL DEFAULT '' COMMENT '广告链接',
  `addtime` int(11) NOT NULL COMMENT '添加时间',
  `sort` int(11) NOT NULL COMMENT '排序',
  `open` tinyint(2) NOT NULL COMMENT '1=审核  0=未审核',
  `content` varchar(225) DEFAULT '' COMMENT '广告内容',
  PRIMARY KEY (`ad_id`) USING BTREE,
  KEY `plug_ad_adtypeid` (`type_id`) USING BTREE
) ENGINE=MyISAM AUTO_INCREMENT=36 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC COMMENT='广告表';

-- -----------------------------
-- Records of `clt_ad`
-- -----------------------------
INSERT INTO `clt_ad` VALUES ('15', 'CLTPHP的目的是 让所有人都能 高效 简洁 的建立网站', '1', '/uploads/20181225/goods/sm_59106ab8a985addbd2235bb4733cab55.jpg', 'http://demo.cltphp.com', '1480909037', '1', '1', '虽然世界上有成千上万的建站系统，但CLTPHP会告诉你，真正高效的建站系统是什么样的。');
INSERT INTO `clt_ad` VALUES ('17', '即使是后台我们也极力追求尽善尽美', '1', '/uploads/20180611/25e5f5a08933130f026a6119666b44a8.png', 'http://demo.cltphp.com', '1481788850', '2', '1', 'CLTPHP采用了优美的layui框架，一面极简，一面丰盈。加上angular Js，让数据交互变得更为简洁直白。用最基础的代码，实现最强大的效果，让你欲罢不能！');
INSERT INTO `clt_ad` VALUES ('18', 'ThinkPHP5极大的提高了CLTPHP的可拓展性', '1', '/uploads/20180611/814e5f76ef5dce49dfd3dce771631ecf.png', 'http://demo.cltphp.com', '1481788869', '3', '1', 'CLTPHP采用的ThinkPHP5为基础框架，从而使得CLTPHP的拓展性变的极为强大。从模型构造到栏目建立，再到前台展示，一气呵成，网站后台一条龙式操作，让小白用户能快速掌握CLTPHP管理系统的核心操作，让小白开发者能更好的理解CLTPHP的核心构建价值。');
