const express = require('express')

const app = express()
app.get('/', (req, res) => {
    res.send(' Yess! Backend is Running Perfectly')
})

app.get('/about', (req, res)=>{
    res.send('This is the health page')
})

app.listen(3000)