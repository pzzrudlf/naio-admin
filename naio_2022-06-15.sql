# ************************************************************
# Sequel Ace SQL dump
# 版本号： 20033
#
# https://sequel-ace.com/
# https://github.com/Sequel-Ace/Sequel-Ace
#
# 主机: localhost (MySQL 8.0.18)
# 数据库: naio
# 生成时间: 2022-06-15 07:55:48 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
SET NAMES utf8mb4;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE='NO_AUTO_VALUE_ON_ZERO', SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# 转储表 casbin_rule
# ------------------------------------------------------------

DROP TABLE IF EXISTS `casbin_rule`;

CREATE TABLE `casbin_rule` (
  `p_type` varchar(100) DEFAULT NULL,
  `v0` varchar(100) DEFAULT NULL,
  `v1` varchar(100) DEFAULT NULL,
  `v2` varchar(100) DEFAULT NULL,
  `v3` varchar(100) DEFAULT NULL,
  `v4` varchar(100) DEFAULT NULL,
  `v5` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;



# 转储表 department
# ------------------------------------------------------------

DROP TABLE IF EXISTS `department`;

CREATE TABLE `department` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `create_time` datetime DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;



# 转储表 log
# ------------------------------------------------------------

DROP TABLE IF EXISTS `log`;

CREATE TABLE `log` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `create_time` datetime DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;



# 转储表 permission
# ------------------------------------------------------------

DROP TABLE IF EXISTS `permission`;

CREATE TABLE `permission` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `parent_id` mediumint(8) unsigned DEFAULT NULL COMMENT '父权限ID(0为顶级菜单)',
  `parent_name` varchar(36) DEFAULT NULL COMMENT '父级菜单名称',
  `label` varchar(64) NOT NULL COMMENT '权限名称',
  `code` varchar(64) DEFAULT NULL COMMENT '授权标识符',
  `path` varchar(255) DEFAULT NULL COMMENT '路由地址',
  `name` varchar(255) DEFAULT NULL COMMENT '路由名称',
  `url` varchar(255) DEFAULT NULL COMMENT '授权路径',
  `order_num` smallint(6) DEFAULT '0' COMMENT '序号',
  `type` tinyint(4) NOT NULL DEFAULT '0' COMMENT '类型(0目录1菜单2按钮)',
  `icon` varchar(200) DEFAULT NULL COMMENT '图标',
  `remark` varchar(200) DEFAULT NULL COMMENT '备注',
  `create_time` datetime DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

LOCK TABLES `permission` WRITE;
/*!40000 ALTER TABLE `permission` DISABLE KEYS */;

INSERT INTO `permission` (`id`, `parent_id`, `parent_name`, `label`, `code`, `path`, `name`, `url`, `order_num`, `type`, `icon`, `remark`, `create_time`, `update_time`)
VALUES
	(17,0,'顶级菜单','系统管理','sys:manage','/system','system','/system/system',1,0,'Setting',NULL,'2023-08-08 11:11:11','2023-08-09 15:26:28'),
	(18,17,'系统管理','用户管理','sys:user','/userList','userList','/system/user/UserList',3,1,'UserFilled',NULL,'2023-08-08 11:11:11','2023-08-09 15:26:28'),
	(20,18,'用户管理','新增','sys:user:add',NULL,NULL,NULL,NULL,2,'User','新增用户','2023-08-08 11:11:11','2023-08-09 15:26:28'),
	(21,18,'用户管理','修改','sys:user:edit',NULL,NULL,NULL,NULL,2,'el-icon-document','修改用户','2023-08-08 11:11:11','2023-08-09 15:26:28'),
	(22,18,'用户管理','删除','sys:user:delete',NULL,NULL,NULL,NULL,2,'el-icon-document','删除用户','2023-08-08 11:11:11','2023-08-09 15:26:28'),
	(23,17,'系统管理','角色管理','sys:role','/roleList','roleList','/system/role/RoleList',4,1,'Wallet',NULL,'2023-08-08 11:11:11','2023-08-09 15:26:28'),
	(25,23,'角色管理','新增','sys:role:add',NULL,NULL,NULL,NULL,2,'el-icon-document','新增角色','2023-08-08 11:11:11','2023-08-09 15:26:28'),
	(26,23,'角色管理','修改','sys:role:edit',NULL,NULL,NULL,NULL,2,'el-icon-document','修改角色','2023-08-08 11:11:11','2023-08-09 15:26:28'),
	(27,23,'角色管理','删除','sys:role:delete',NULL,NULL,NULL,NULL,2,'el-icon-document','删除角色','2023-08-08 11:11:11','2023-08-09 15:26:28'),
	(28,17,'系统管理','权限管理','sys:menu','/menuList','menuList','/system/menu/MenuList',5,1,'Menu',NULL,'2023-08-08 11:11:11','2023-08-09 15:26:28'),
	(30,28,'菜单管理','新增','sys:menu:add',NULL,NULL,NULL,NULL,2,'el-icon-document','新增权限','2023-08-08 11:11:11','2023-08-09 15:26:28'),
	(31,28,'菜单管理','修改','sys:menu:edit',NULL,NULL,NULL,NULL,2,'el-icon-document','修改权限','2023-08-08 11:11:11','2023-08-09 15:26:28'),
	(32,28,'菜单管理','删除','sys:menu:delete',NULL,NULL,NULL,NULL,2,'el-icon-document','删除权限','2023-08-08 11:11:11','2023-08-09 15:26:28'),
	(33,17,'系统管理','机构管理','sys:dept','/deptList','deptList','/system/dept/DepartmentList',2,1,'List','机构管理','2020-04-12 22:58:29','2020-04-08 17:12:19'),
	(46,33,'机构管理','新增','sys:dept:add',NULL,NULL,NULL,0,2,'el-icon-document','新增机构','2020-04-12 19:58:48','2020-04-12 19:58:48'),
	(76,33,'机构管理','编辑','sys:dept:edit',NULL,NULL,NULL,1,2,'el-icon-document','修改机构\n','2020-04-12 20:42:20','2020-04-12 20:42:20'),
	(78,33,'机构管理','删除','sys:dept:delete',NULL,NULL,NULL,3,2,'el-icon-document','删除机构','2020-04-18 10:25:55','2020-04-18 10:25:55'),
	(79,23,'角色管理','分配权限','sys:role:assign',NULL,NULL,NULL,0,2,'el-icon-document','分配权限','2020-04-18 10:31:05','2020-04-18 10:31:05'),
	(80,18,'用户管理','分配角色','sys:user:assign',NULL,NULL,NULL,0,2,'el-icon-document','分配角色','2020-04-18 10:50:14','2020-04-18 10:50:14'),
	(85,43,'代码生成','新增','sys:code:add',NULL,NULL,NULL,0,2,'',NULL,'2021-02-02 22:05:31','2021-02-02 22:05:31'),
	(86,43,'代码生成','编辑','sys:code:edit',NULL,NULL,NULL,1,2,'',NULL,'2021-02-02 22:06:15','2021-02-02 22:06:15');

/*!40000 ALTER TABLE `permission` ENABLE KEYS */;
UNLOCK TABLES;


# 转储表 role
# ------------------------------------------------------------

DROP TABLE IF EXISTS `role`;

CREATE TABLE `role` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(64) DEFAULT NULL COMMENT '角色名称',
  `remark` varchar(200) DEFAULT NULL COMMENT '角色说明',
  `create_user` varchar(11) DEFAULT NULL COMMENT '创建人',
  `create_time` datetime DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

LOCK TABLES `role` WRITE;
/*!40000 ALTER TABLE `role` DISABLE KEYS */;

INSERT INTO `role` (`id`, `name`, `remark`, `create_user`, `create_time`, `update_time`)
VALUES
	(9,'系统管理员','系统管理员','9','2020-05-20 07:51:28','2020-05-20 07:51:28'),
	(10,'超级管理员','超级管理员','9','2023-08-08 11:11:11','2023-08-08 11:11:11'),
	(13,'销售管理员','管理销售人员','9','2020-04-14 12:22:53','2020-04-14 12:22:53'),
	(14,'财务管理员','管理公司财务','9','2020-04-14 12:23:10','2020-04-14 12:23:10'),
	(15,'人才管理员','人才管理员','9','2020-04-18 09:58:05','2020-04-18 09:58:05');

/*!40000 ALTER TABLE `role` ENABLE KEYS */;
UNLOCK TABLES;


# 转储表 role_permission
# ------------------------------------------------------------

DROP TABLE IF EXISTS `role_permission`;

CREATE TABLE `role_permission` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `role_id` mediumint(9) DEFAULT NULL COMMENT '角色id',
  `permission_id` mediumint(9) DEFAULT NULL COMMENT '权限id',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

LOCK TABLES `role_permission` WRITE;
/*!40000 ALTER TABLE `role_permission` DISABLE KEYS */;

INSERT INTO `role_permission` (`id`, `role_id`, `permission_id`)
VALUES
	(27,14,17),
	(28,14,18),
	(29,14,20),
	(30,14,21),
	(31,14,22),
	(32,14,23),
	(33,14,25),
	(34,14,26),
	(35,14,27),
	(36,14,28),
	(37,14,30),
	(38,14,31),
	(39,14,32),
	(40,14,33),
	(41,14,46),
	(42,14,76),
	(795,15,20),
	(796,15,21),
	(797,15,22),
	(798,15,23),
	(799,15,25),
	(800,15,26),
	(801,15,27),
	(802,15,79),
	(803,15,76),
	(804,15,17),
	(805,15,18),
	(806,15,33),
	(1073,13,17),
	(1074,13,33),
	(1075,13,46),
	(1076,13,76),
	(1077,13,78),
	(1078,13,18),
	(1079,13,20),
	(1080,13,21),
	(1081,13,22),
	(1082,13,80),
	(1083,13,23),
	(1084,13,25),
	(1085,13,26),
	(1086,13,27),
	(1087,13,79),
	(1088,13,28),
	(1089,13,30),
	(1090,13,31),
	(1091,13,32),
	(1163,9,17),
	(1164,9,33),
	(1165,9,46),
	(1166,9,76),
	(1167,9,78),
	(1168,9,18),
	(1169,9,20),
	(1170,9,21),
	(1171,9,22),
	(1172,9,80),
	(1173,9,23),
	(1174,9,25),
	(1175,9,26),
	(1176,9,27),
	(1177,9,79),
	(1178,9,28),
	(1179,9,30),
	(1180,9,31),
	(1181,9,32),
	(1194,9,85),
	(1195,9,86),
	(1198,10,17),
	(1199,10,33),
	(1200,10,46),
	(1201,10,76),
	(1202,10,78),
	(1203,10,18),
	(1204,10,20),
	(1205,10,21),
	(1206,10,22),
	(1207,10,80),
	(1208,10,23),
	(1209,10,25),
	(1210,10,26),
	(1211,10,27),
	(1212,10,79),
	(1213,10,28),
	(1214,10,30),
	(1215,10,31),
	(1216,10,32);

/*!40000 ALTER TABLE `role_permission` ENABLE KEYS */;
UNLOCK TABLES;


# 转储表 user
# ------------------------------------------------------------

DROP TABLE IF EXISTS `user`;

CREATE TABLE `user` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(30) NOT NULL COMMENT '用户名称',
  `password` varchar(191) NOT NULL DEFAULT '' COMMENT '用户密码',
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL,
  `is_account_non_expired` tinyint(4) DEFAULT '1' COMMENT '账户是否过期(1未过期,0已过期)',
  `is_account_non_locked` tinyint(4) DEFAULT '1' COMMENT '账户是否被锁定(1未锁定,0已锁定)',
  `is_credentials_non_expired` tinyint(4) DEFAULT '1' COMMENT '密码是否过期(1未过期,0已过期)',
  `is_enabled` tinyint(4) DEFAULT '1' COMMENT '账户是否可用(1可用,0删除用户)',
  `nick_name` varchar(64) DEFAULT NULL COMMENT '昵称',
  `dept_id` varchar(56) DEFAULT NULL COMMENT '部门id',
  `dept_name` varchar(255) DEFAULT NULL COMMENT '部门名称',
  `mobile` varchar(20) DEFAULT NULL COMMENT '手机号',
  `email` varchar(50) DEFAULT NULL COMMENT '注册邮箱',
  `post_id` smallint(6) DEFAULT NULL COMMENT '岗位id',
  `post_name` varchar(36) DEFAULT NULL COMMENT '岗位名称',
  `login_name` varchar(36) DEFAULT NULL COMMENT '姓名',
  `is_admin` varchar(5) DEFAULT '0' COMMENT '1管理员',
  `sex` varchar(5) DEFAULT NULL COMMENT '0男1女',
  `salt` varchar(255) DEFAULT NULL COMMENT '加密盐',
  `create_time` datetime DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `idx_user_deleted_at` (`deleted_at`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;

INSERT INTO `user` (`id`, `username`, `password`, `created_at`, `updated_at`, `deleted_at`, `is_account_non_expired`, `is_account_non_locked`, `is_credentials_non_expired`, `is_enabled`, `nick_name`, `dept_id`, `dept_name`, `mobile`, `email`, `post_id`, `post_name`, `login_name`, `is_admin`, `sex`, `salt`, `create_time`, `update_time`)
VALUES
	(1,'admin','$2a$04$jQmNRGi69AKw/FUwU4a6A.EC1SG8wyJTJTz3uBLsa6toMJji3TX7C','2022-04-20 11:56:06','2022-04-20 11:56:06',NULL,1,1,1,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,NULL,NULL,NULL),
	(9,'test','$2a$04$jQmNRGi69AKw/FUwU4a6A.EC1SG8wyJTJTz3uBLsa6toMJji3TX7C',NULL,NULL,NULL,1,1,1,1,'超级管理员','1','高原机械制造有限公司','110','admin@163.com',NULL,NULL,'超级管理员','1','0','feb60bc9648dcc69063dc0f7eefc46ee','2023-08-08 11:11:11','2019-12-16 10:25:53');

/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;


# 转储表 user_role
# ------------------------------------------------------------

DROP TABLE IF EXISTS `user_role`;

CREATE TABLE `user_role` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` mediumint(9) DEFAULT NULL COMMENT '用户id',
  `role_id` mediumint(9) DEFAULT NULL COMMENT '角色id',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

LOCK TABLES `user_role` WRITE;
/*!40000 ALTER TABLE `user_role` DISABLE KEYS */;

INSERT INTO `user_role` (`id`, `user_id`, `role_id`)
VALUES
	(1,1,9),
	(2,9,9);

/*!40000 ALTER TABLE `user_role` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
