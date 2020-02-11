const express = require('express')
const app = express()

//引用mongoose连接mongodb
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/express-test', { useNewUrlParser: true })
//创建model模型
const Product = mongoose.model('Product', new mongoose.Schema({
    title: String,
}))
//往模型插入数据
// Product.insertMany([
//     { title: '产品1' },
//     { title: '产品2' },
//     { title: '产品3' },
// ])

//静态文件托管，必须加一个/static，才能访问得到
app.use('/', express.static('public'))

//npm引入cors并use 解决跨域问题
app.use(require('cors')())

app.get('/', (req, res) => {
    res.send({ page: 'home' })
})
app.get('/about', (req, res) => {
    res.send({ page: 'About Us' })
})

app.get('/product', async (req, res) => {//使用async await find函数查找数据库的数据
    res.send(await Product.find())
})
app.listen(3000, () => {
    console.log('3000');
})