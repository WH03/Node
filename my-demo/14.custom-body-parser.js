const qs = require('querystring')

const bodyParser = (req, res, next) => {
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
        // TODO:把字符串格式的请求体数据，解析成对象格式
        // 调用qs.parse把字符串解析为对象
        const body = qs.parse(str)
        console.log(body)

        req.body = body

        next()

    })
}

module.exports = bodyParser