// 导入express
const express = require("express");
// 创建express实例
const app = express();

// 导入cors
const cors = require("cors");
// 注册cors中间件
app.use(cors());

// 配置解析表单数据的中间件。注意：这个中间件，只能解析application/x-www-form-urlencoded格式的表单数据
app.use(express.urlencoded({ extended: false }));

// 导入并使用路由模块
const userRouter = require("./router/user");
app.use("/api", userRouter);

// 启动服务器
app.listen(3007, () => {
  console.log("express server is running on http://127.0.0.1:3007");
});
