const express = require('express')

const app = express()

// 1、导入自己封装的中间件模块
const cuntomBodyParser = require('./14.custom-body-parser')
// 解析表单内容的中间件
app.use(cuntomBodyParser)

app.post('/user', (req, res) => {
    res.send(req.body)
})

app.listen(8080, () => {
    console.log('express server is running at http:127.0.0.1...')
})