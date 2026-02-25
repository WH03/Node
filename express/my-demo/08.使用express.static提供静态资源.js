const express = require('express')

const app = express()

// 调用express.static()方法，快速的对外提供静态资源
app.use(express.static('./clock'))

app.listen(8080, () => {
    console.log('express server is running at http://127.0.0.1');

})