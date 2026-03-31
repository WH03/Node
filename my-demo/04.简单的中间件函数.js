const express = require('express')

const app = express()

// 创建一个最简单的中间件函数
const middleWare = (req, res, next) => {
    console.log('这是一个最简单的中间件函数...')

    // 把流转关系交给下一个中间件或者路由
    next()
}

app.use(middleWare)

app.get('/', (req, res) => {
    res.send('Home page')
})

app.get('/user', (req, res) => {
    res.send('User page')
})

app.listen(8080, () => {
    console.log('express server is running at http://127.0.0.1')
})