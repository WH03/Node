// 文章分类的路由模块
const express = require("express");
const router = express.Router();

// 导入处理文章分类的路由处理函数模块
const artCate_handler = require("../router_handler/artcate");
router.get("/cates", artCate_handler.getArtCates);

// 导入验证数据规则中间件
const expressJoi = require("@escook/express-joi");
// 导入文章分类的验证规则模块
const {
  add_cate_schema,
  delete_cate_schema,
  get_cate_schema,
  update_cate_schema,
} = require("../schema/artcate");

// 新增文章分类的路由
router.post(
  "/addCates",
  expressJoi(add_cate_schema),
  artCate_handler.addArtCates
);
// 删除文章分类的路由
router.delete(
  "/deleteCate/:id",
  expressJoi(delete_cate_schema),
  artCate_handler.deleteCateById
);
// 根据id获取文章分类的路由
router.get(
  "/getCates/:id",
  expressJoi(get_cate_schema),
  artCate_handler.getArtCatesById
);

// 根据id更新文章分类的路由
router.post(
  "/updateCate",
  expressJoi(update_cate_schema),
  artCate_handler.updateCateById
);

module.exports = router;
