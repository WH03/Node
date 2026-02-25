const express = require('express')

const app = express()


app.use((req, res, next) => {
    // console.log('全局中间件')
    // 获取请求到服务器的时间
    const time = Date.now()
    // 为req对象挂载自定义属性，从而把时间共享给后续所有路由
    req.statrTime = time
    next()
})

app.get('/', (req, res) => {
    res.send(`Home page, ${req.statrTime}`)
})

app.get('/user', (req, res) => {
    res.send(`User page ${req.statrTime}`)
})

app.listen(8080, () => {
    console.log('express server is running at http://127.0.0.1')
})