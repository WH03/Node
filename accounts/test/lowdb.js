//导入 lowdb
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('db.json');
//获取 db 对象
const db = low(adapter);

// 初始化数据
db.defaults({post:[],user:{}}).write()

// 写入数据
db.get('post').push({id:1,title:'今天天气还不错~~~'}).write()

// 获取数据
console.log(db.get('post').value())