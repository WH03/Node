const express = require('express')

const app = express()


// 定义路由
app.get('/', (req, res) => {
    // 人为制造错误
    throw new Error('服务器内部发生了错误。。。')
    res.send('Home page')
})


// 定义错误级别中间件，捕获整个项目的异常错误，防止程序崩溃
app.use((err, req, res, next) => {
    console.log(`发生了错误${err.message}`)
    res.send(`Error${err.message}`)
})



app.listen(8080, () => {
    console.log('express server is running at http:127.0.0.1....')
})