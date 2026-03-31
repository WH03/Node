import mysql from "mysql";
import express from "express";
import cors from "cors";
const PORT = 3000;

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "db",
});

connection.connect((err) => {
  if (err) {
    console.log("连接失败");
    connection.end(); //关闭连接
    throw err;
  }
  console.log("数据库连接成功");
});

const app = express();
app.use(cors());

// 监听端口，获取数据
app.get("/student/list", (req, res) => {
  // 查询
  connection.query("select * from student", (err, result) => {
    if (err) {
      res.status(500).send(`查询失败：${err}`);
    }
    // console.log("查询成功result:", result);
    res.status(200).json({
      code: 200,
      data: result,
    });
  });
});
// 监听端口
app.listen(PORT, () => {
  console.log(`服务器启动成功，端口号${PORT}`);
});
