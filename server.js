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
    // const data = await Product.find().limit(2) 限制两条
    // const data = await Product.find().skip(1).limit(2) 跳过1条 限制两条
    // const data = await Product.find().where({ 根据条件查询
    //     title: '产品2'
    // })
    // const data = await Product.find().sort({ 排序
    //     _id: -1
    // })
    const data = await Product.find()
    res.send(data)
})

app.get('/product/:id', async (req, res) => { //根据id查 url中把后面的捕获过来变成id
    const data = await Product.findById(req.params.id) //注意id在req.params中
    res.send(data)
})

app.listen(3000, () => {
    console.log('3000');
})