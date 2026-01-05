const fs = require('fs')
// console.log('@@@fs', fs)
// 写入数据
// fs.writeFile('1.txt', '你好wwwwwwwww', (err, data) => {
// 	if (err) {
// 		console.log(err.message)
// 	}
// 	console.log(data)
// })

// 追加数据
// fs.appendFile('1.txt', '-----你是谁？？？', (err, data) => {
// 	if (err) {
// 		console.log(err)
// 	}
// 	console.log('文件追加成功！')
// })

// 删除文件
// fs.unlink('1.txt', (err) => {
// 	if (err) {
// 		console.log('删除失败！', err)
// 	}
// 	console.log('删除成功！')
// })

// // 重命名文件
// fs.rename('2.txt', 'newName.txt', (err) => {
// 	if (err) {
// 		console.log('重命名失败！', err)
// 	}
// 	console.log('重命名成功！')
// })

// 创建目录
// fs.mkdir('newDir', {
// 	recursive: true
// }, (err) => {
// 	if (err) {
// 		console.log('创建失败！')
// 	}
// 	console.log('创建成功！')
// })

// 删除目录
// fs.rmdir('newDir', (err) => {
// 	if (err) {
// 		console.log('删除失败', err)
// 	}
// 	console.log('删除成功！')
// })

// // 检查文件目录是否存在
// // let exist = fs.existsSync('newDir')//不存在
// let exist = fs.existsSync('newName.txt')//存在
// console.log('文件是否存在exist：', exist)

// // 修改文件权限
// fs.chmod('newName.txt', 0o775, (err) => {
// 	if (err) {
// 		console.log('文件权限修改失败！', err)
// 	}
// 	console.log('权限修改成功！')
// })

// 读取文件流
const readStream = fs.createReadStream('newName.txt', 'utf-8')

readStream.on('data', (chunk) => {
	console.log('chunk读取的数据块', chunk)
})
readStream.on('end', () => {
	console.log('文件读取完成！');
})
readStream.on('error', (err) => {
	console.log('文件读取失败err', err)
})