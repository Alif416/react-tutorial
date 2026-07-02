const app = require('./src/app')
const express=require('express')

const notes = []

app.use(express.json())

//create an api which  will fetch the notes information
//create an api which will post new object in the notes array
//create an api which will delete an object

app.get('/notes', (req, res) => {
    res.status(200).json({
        message: "Data fetched Suceesfully",
        notes:notes
    })

})



app.post('/notes', (req, res) => {
    notes.push(req.body)
    res.status(201).json({
        message:'Data Added Successfully'
    })
    
})


app.delete('/notes/:index', (req, res) => {
    const index = req.params.index
    notes.splice(index, 1)
    res.status(200).json({
        message:"Data Deleted Successfully"
    })
})

app.listen(3000,()=>{
    console.log('3000 port is running');
})