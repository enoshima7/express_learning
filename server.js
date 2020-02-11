const express = require('express')
const app = express()

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
app.get('/product', (req, res) => {
    res.send([
        { id: 1, title: 'product 1' },
        { id: 2, title: 'product 2' },
        { id: 3, title: 'product 3' },
    ])
})
app.listen(3000, () => {
    console.log('3000');
})