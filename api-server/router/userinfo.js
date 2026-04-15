const express = require("express");
const router = express.Router();

// 挂载路由

// 导入获取用户基本信息的处理函数模块
const userinfoHandler = require("../router_handler/userinfo");

// 获取用户基本信息的路由
router.get("/userinfo", userinfoHandler.getUserInfo);

module.exports = router;
