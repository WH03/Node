// 文章分类的路由处理函数模块

//导入数据库操作模块
const db = require("../db/index");

// 获取文章分类的列表的处理函数
exports.getArtCates = (req, res) => {
  // 定义查询分类列表数据的SQL语句
  const sql = `select * from ev_article_cate where is_delete=0 order by id asc`;
  //   执行SQL语句
  db.query(sql, (err, results) => {
    // 执行SQL语句失败
    if (err) return res.cc(err);
    // 执行SQL语句成功
    res.send({
      status: 0,
      message: "获取文章分类列表成功!",
      data: results,
    });
  });
};

// 新增文章分类的处理函数
exports.addArtCates = (req, res) => {
  // 1、定义查重的SQL语句
  const sql = `select * from ev_article_cate where name=? or alias=?`;
  //2、执行SQL语句
  db.query(sql, [req.body.name, req.body.alias], (err, results) => {
    // 3、执行SQL语句失败
    if (err) return res.cc(err);
    // 4.1、判断数据的length
    if (results.length === 2)
      return res.cc("分类名称和别名被占用，请更换后重试！");
    // 4.2、length等于1的情况、
    if (
      results.length === 1 &&
      results[0].name === req.body.name &&
      results[0].alias === req.body.alias
    )
      return res.cc("分类名称和别名被占用，请更换后重试！");
    // 4.3、length等于1的情况、
    if (results.length === 1 && results[0].name === req.body.name)
      return res.cc("分类名称被占用，请更换后重试！");
    // 4.4、length等于1的情况、
    if (results.length === 1 && results[0].alias === req.body.alias)
      return res.cc("分类别名被占用，请更换后重试！");
    // 5、定义插入文章分类的SQL语句
    const sql = `insert into ev_article_cate set ?`;
    // 6、执行新增文章分类的SQL语句
    db.query(sql, req.body, (err, results) => {
      if (err) return res.cc(err);
      if (results.affectedRows !== 1) return res.cc("新增文章分类失败！");
      res.cc("新增文章分类成功！", 0);
    });
  });
};

// 根据id删除文章分类数据
exports.deleteCateById = (req, res) => {
  // 1、定义标记删除的SQL语句
  const sql = `update ev_article_cate set is_delete=1 where id=?`;
  //2、调用db.query()执行SQL语句
  db.query(sql, req.params.id, (err, results) => {
    if (err) return res.cc(err);
    if (results.affectedRows !== 1) return res.cc("删除文章分类失败！");
    // 删除成功
    res.cc("删除文章分类成功！", 0);
  });
};

// 根据id获取文章分类数据的处理函数
exports.getArtCatesById = (req, res) => {
  // 1、定义根据id获取文章分类数据的SQL语句
  const sql = `select * from ev_article_cate where id=?`;
  db.query(sql, req.params.id, (err, results) => {
    // 执行SQL语句失败
    if (err) return res.cc(err);
    // 执行SQL语句成功，但是没有查询到任何数据
    if (results.length !== 1) return res.cc("获取文章分类数据失败！");
    //成功，将查询到的数据响应给客户端
    res.send({
      status: 0,
      message: "获取文章分类数据成功！",
      data: results[0],
    });
  });
};

// 根据id更新文章分类数据的处理函数
exports.updateCateById = (req, res) => {
  // 1、定义查重的SQL语句
  const sql = `select * from ev_article_cate where id<>? and (name=? or alias=?)`;
  db.query(
    sql,
    [req.body.id, req.body.name, req.body.alias],
    (err, results) => {
      // 2、执行SQL语句失败
      if (err) return res.cc(err);
      /* 判断名称和别名被占用的4种情况 */
      // 1、两者都被占用
      if (results.length === 2)
        return res.cc("分类名称和别名被占用，请更换后重试！");
      //    2、名称、别名被占用
      if (
        results.length === 1 &&
        results[0].name === req.body.name &&
        results[0].alias === req.body.alias
      )
        return res.cc("分类名称和别名被占用，请更换后重试！");

      // 3、名称被占用
      if (results.length === 1 && results[0].name === req.body.name)
        return res.cc("分类名称被占用，请更换后重试！");
      // 4、别名被占用
      if (results.length === 1 && results[0].alias === req.body.alias)
        return res.cc("分类别名被占用，请更换后重试！");

      //   3、定义更新文章分类的SQL语句
      const sql = `update ev_article_cate set ? where id=?`;
      db.query(sql, [req.body, req.body.id], (err, results) => {
        if (err) return res.cc(err);
        if (results.affectedRows !== 1) return res.cc("更新文章分类失败");
        res.cc("更新文章分类成功！", 0);
      });
    }
  );
};
