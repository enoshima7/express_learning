const express = require('express')

const app = express()
app.get('/', (req, res) => {
    res.send({ page: 'home' })
})
app.get('/about', (req, res) => {
    res.send({ page: 'About Us' })
})
app.get('/product', (req, res) => {
    res.send([
        {id:1,title:'product 1'},
        {id:2,title:'product 2'},
        {id:3,title:'product 3'},
    ])
})
app.listen(3000, () => {
    console.log('3000');
})