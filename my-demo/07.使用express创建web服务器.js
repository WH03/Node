// 1、导入web服务器
const express = require('express')
// 2、创建web服务器
const app = express()

// 4、监听客户端的get和post请求，并向客户端响应具体内容
// app.get('/user', (req, res) => {
//     res.send({ name: 'zs', age: 18, gender: '男' })
// })
app.post('/user', (req, res) => {
    res.send('请求成功！')
})

app.get('/', (req, res) => {
    res.send(req.query)
})
// 匹配动态参数
app.get('/user/:id/:name', (req, res) => {
    console.log(req.params)
    res.send(req.params)
})

// 3、启动web服务器
app.listen(8080, () => {
    console.log('express server is running at http://127.0.0.1')
})