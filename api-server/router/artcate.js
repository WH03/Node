// 文章分类的路由模块
const express = require("express");
const router = express.Router();

// 导入处理文章分类的路由处理函数模块
router.get("/cates", (req, res) => {
  res.send("获取文章分类的列表数据");
});

module.exports = router;
