// 导入express
const express = require("express");
// 创建express实例
const app = express();

const joi = require("joi");

// 导入cors
const cors = require("cors");
// 注册cors中间件
app.use(cors());

// 配置解析表单数据的中间件。注意：这个中间件，只能解析application/x-www-form-urlencoded格式的表单数据
app.use(express.urlencoded({ extended: false }));

// 一定要在路由之前，封装res.cc这个函数
app.use((req, res, next) => {
  // status默认值为1，表示失败的情况
  // err的值,可能是一个错误对象,也可能是一个错误的,描述对象
  res.cc = function (err, status = 1) {
    res.send({
      status,
      message: err instanceof Error ? err.message : err,
    });
  };
  next();
});

// 导入配置解析token的中间件
const expressJWT = require("express-jwt");
const config = require("./config");

app.use(
  expressJWT({ secret: config.jwtSecretKey }).unless({ path: [/^\/api/] })
);

// 导入并使用用户路由模块
const userRouter = require("./router/user");
app.use("/api", userRouter);

// 导入并使用用户信息的路由模块
const userinfoRouter = require("./router/userinfo");
app.use("/my", userinfoRouter); 

// 定义错误级别的中间件
app.use((err, req, res, next) => {
  // 验证失败导致的错误
  if (err instanceof joi.ValidationError) return res.cc(err);
  // 身份认证失败错误
  if (err.name === "UnauthorizedError") return res.cc("身份认证失败！");
  // 未知错误
  res.cc(err);
});

// 启动服务器
app.listen(3007, () => {
  console.log("express server is running on http://127.0.0.1:3007");
});
