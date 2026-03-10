// 1、导入mysql模块
const mysql = require('mysql')
// 2、建立与mysql数据库的连接关系
const db = mysql.createPool({
    host: '127.0.0.1',//数据库的IP地址
    user: 'root',//登录数据库的账号
    password: 'admin123',//登录数据库的密码
    database: 'my_db_01'//指定要操作哪个是数据库
})


// // 3、测试mysql模块是否正常工作
// db.query('select 1', (err, result) => {
//     // mysql工作期间报错了
//     if (err) return console.log(err.message)
//     // 能够成功的执行SQL语句
//     console.log(result)
// })


// 查询users表中所有的数据
// const sqlStr = 'select * from users'
// db.query(sqlStr, (err, result) => {
//     if (err) return console.log(err.message)
//     // 查询数据
//     console.log(result)
// })

// 向users表中新增数据，其中username为Spider-man,password为pcc123
// const user = { username: 'Spider-man', password: 'pcc123' }
// // 定义执行的SQL语句
// const sqlStr = 'insert into users (username,password) values (?,?)'
// // 执行SQL语句
// db.query(sqlStr, [user.username, user.password], (err, results) => {
//     // 执行SQL语句
//     if (err) return console.log(err.message)
//     // 成功了
//     // 注意：如果执行的是insert into插入语句，则result是一个对象
//     // 可以通过affectedRows属性，来判断是否插入数据成功
//     if (results.affectedRows === 1) {
//         console.log('插入数据成功！')
//     }
// })

// // 演示插入数据的便捷方式
// const user = { username: 'Spider-man2', password: 'pcc4321' }
// // 定义待执行的SQL语句
// const sqlStr = 'insert into users set ?'
// // 执行SQL语句
// db.query(sqlStr, user, (err, results) => {
//     if (err) return console.log(err.message)
//     if (results.affectedRows === 1) {
//         console.log('插入数据成功！')
//     }
// })


// // 演示如何更新用户的信息
// const user = { id: 6, username: 'aaa', password: '000' }
// // 定义SQL语句
// const sqlStr = 'update users set username=?,password=? where id=?'
// // 执行SQL语句
// db.query(sqlStr, [user.username, user.password, user.id], (err, results) => {
//     if (err) return console.log(err.message)
//     // 注意：执行了 update 语句之后，执行的结果，也是一个对象，可以通过affectedRows判断是否更新成功
//     if (results.affectedRows === 1) {
//         console.log('更新成功！')
//     }
// })

// 演示更新数据的便捷方式
// const user = { id: 6, username: 'aaaa1', password: '0000' }
// // 定义SQL语句
// const sqlStr = 'update users set ? where id=?'
// // 执行SQL语句
// db.query(sqlStr, [user, user.id], (err, results) => {
//     if (err) return console.log(err.message)
//     if (results.affectedRows===1) {
//         console.log('数据更新成功！')
//     }
// })


// 删除id为5的用户
// const sqlStr = 'delete from users where id=?'
// db.query(sqlStr, 5, (err, results) => {
//     if (err) return console.log(err.message)
//     // 执行delete语句之后，返回一个对象，包含affectedRows
//     if (results.affectedRows === 1) {
//         console.log('数据删除成功！')
//     }
// })

// 标记删除
const sqlStr = 'update users set status=? where id=?'
db.query(sqlStr, [1, 6], (err, results) => {
    if (err) return console.log(err.message)
    if (results.affectedRows === 1) {
        console.log('标记删除成功！')
    }
})