const express = require('express')

const app = express()

// 定义一个局部中间件
const mw1 = (req, res, next) => {
    console.log('这是一个局部中间件...')
    next()
}

// 创建路由
app.get('/', mw1, (req, res) => {
    res.send('Home page.')
})

app.get('/user', (req, res) => {
    res.send('User page.')
})

app.listen(8080, () => {
    console.log('express server is running at http://127.0.0.1')
})