const express = require('express')

const app = express()

// 定义第一个局部中间件
const mw1 = (req, res, next) => {
    console.log('第一个局部中间件')
    next()
}
// 第二个局部中间件
const mw2 = (req, res, next) => {
    console.log('第二个局部中间件')
    next()

}

app.get('/', [mw1, mw2], (req, res) => {
    res.send('Home page')
})

app.get('/user', (req, res) => {
    res.send('user page')
})

app.listen(8080, () => {
    console.log('express server is running at http://127.0.0.1')
})