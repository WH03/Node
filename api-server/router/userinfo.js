const express = require("express");
const router = express.Router();

// 挂载路由

// 导入获取用户基本信息的处理函数模块
const userinfoHandler = require("../router_handler/userinfo");

// 导入验证表单数据的中间件
const expressJoi = require("@escook/express-joi");
// 导入需要的验证规则对象
const { update_userinfo_schema,update_password_schema } = require("../schema/user");

// 获取用户基本信息的路由
router.get("/userinfo", userinfoHandler.getUserInfo);
// 更新用户基本信息的路由
router.post(
  "/userinfo",
  expressJoi(update_userinfo_schema),
  userinfoHandler.updateUserInfo
);
// 更新用户密码的路由
router.post("/updatePwd",expressJoi(update_password_schema), userinfoHandler.updatePassword);

module.exports = router;
