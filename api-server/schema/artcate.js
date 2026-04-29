const joi = require("joi");

const name = joi.string().required();
const alias = joi.string().alphanum().required();

// 删除文章分类的验证规则对象
const id = joi.number().integer().min(1).required();

// 验证规则对象 - 添加文章分类
exports.add_cate_schema = {
  body: {
    name,
    alias,
  },
};

// 验证规则对象 - 更新文章分类
exports.delete_cate_schema = {
  params: {
    id,
  },
};

// 验证规则对象 - 更新文章分类
exports.get_cate_schema = {
  params: {
    id,
  },
};

// 验证规则对象 - 更新文章分类
exports.update_cate_schema = {
  body: {
    id,
    name,
    alias,
  },
};
