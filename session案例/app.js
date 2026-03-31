// 导入express模块
const express = require("express");
// 创建express实例
const app = express();

// 配置session中间件
const session = require("express-session");
app.use(
  session({
    secret: "mykey",
    resave: false,
    saveUninitialized: true,
  })
);

// 托管静态页面
app.use(express.static("./pages"));
// 解析POST提交的数据
app.use(express.urlencoded({ extended: false }));

app.post("/api/login", (req, res) => {
  // 判断用户提交的登录信息是否正确
  if (req.body.username !== "admin" || req.body.password !== "000000") {
    return res.send({ status: 1, msg: "登录失败" });
  }

  //将登录成功的信息保存到session中
  //注意：只有成功配置了express-session中间件，才能使用req.session来操作session
  req.session.user = req.body; //用户的信息
  req.session.islogin = true; //登录状态

  res.send({ status: 0, msg: "登录成功" });
});

// 获取用户姓名接口
app.get("/api/username", (req, res) => {
  // 从session中取用户名称，响应给客户端
  if (!req.session.islogin) {
    return res.send({ status: 1, msg: "fail" });
  }
  res.send({
    status: 0,
    msg: "success",
    username: req.session.user.username,
  });
});

// 退出登录接口
app.post("/api/logout", (req, res) => {
  // 清空session信息
  req.session.destroy();
  res.send({
    status: 0,
    msg: "退出登录成功",
  });
});

// 监听端口
app.listen(8088, () => {
  console.log("服务器启动成功");
});
