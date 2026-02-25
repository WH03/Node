const express = require('express')

const app = express()

// 除了错误级别的中间件，其他中间件，必须在路由前进行配置
// 通过express.json()这个中间件，解析表单中的JSON格式数据

app.use(express.json())
// 通过express.urlencoded()这个中间件，解析表单中的url-encoded格式的数据
app.use(express.urlencoded({ extended: false }))

app.post('/user', (req, res) => {
    // 在服务器，可以使用req.body这个属性，来接收客户端发过来的请求体数据
    console.log(req.body)
    res.send('ok')
})

app.post('/book', (req, res) => {
    // 在服务端，可以通过req.body获取JSON格式表单数据和url-encoded格式数据
    console.log(req.body)
    res.send('book页面')
})

app.listen(8080, () => {
    console.log('express server is running at http://127.0.0.1...')
})