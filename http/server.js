const http = require('http');

const server = http.createServer((req, res) => {
	// res.writeHead(200, {
	// 	'Content-Type': 'text/plain'
	// })
	res.end(`hello word\n`)
})

server.listen(3000, () => {
	console.log('服务器启动')
})