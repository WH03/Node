const express = require('express')

const app = express()

// 配置解析表单数据的中间件
app.use(express.urlencoded({ extended: false }))

// 一定要在路由之前，配置cors这个中间件，解决跨域问题
const cors = require('cors')
app.use(cors())


// 导入并注册路由模块
const router = require('./16.apiRouter')

app.use('/api', router)

app.listen(8080, () => {
    console.log('express server is running at http://127.0.0.1')
})