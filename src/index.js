const express = require('express');
const app = express()
const productRoute = require('./routes/products')

require('./database')

app.get('/', (req, res) => {
    res.send('Hello world')
} )

app.use('/', productRoute)

console.log('Hello world')
app.listen(3000)