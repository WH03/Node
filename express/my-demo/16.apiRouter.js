const express = require('express')

const router = express.Router()

// 在这里挂载对应的路由
router.get('/get', (req, res) => {
    // 通过req.query获取发送到服务器的数据
    const query = req.query
    // 调用res.send()方法，向客户端响应处理结果
    res.send({
        status: 0,//0表示处理成功，1表示处理失败
        msg: 'GET 请求成功',
        data: query//需要响应给客户端的数据
    })
})

// 定义post接口
router.post('/post', (req, res) => {
    const body = req.body
    res.send({
        status: 0,
        msg: 'POST请求成功！',
        data: body
    })
})

module.exports = router