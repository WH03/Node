const express = require('express')

const app = express()

// 导入Node.js内置的querystring模块，
const qs = require('querystring')

// 解析表单内容的中间件
app.use((req, res, next) => {
    // 定义中间件具体的业务逻辑
    // 1、定义一个str字符串，专门用来存储客户端发送过来的请求体数据
    let str = '';
    // 2、监听req的data事件
    req.on('data', (chunk) => {
        // 拼接请求体数据，隐式转换为字符串
        str += chunk
    })
    // 3、监听req的end事件
    req.on('end', () => {
        console.log(str)
        // TODO:把字符串格式的请求体数据，解析成对象格式
        // 调用qs.parse把字符串解析为对象
        const body = qs.parse(str)
        console.log(body)

        req.body = body

        next()

    })
})

app.post('/user', (req, res) => {
    res.send(req.body)
})

app.listen(8080, () => {
    console.log('express server is running at http:127.0.0.1...')
})