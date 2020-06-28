const express = require('express')
const app = express()

app.get('/getImages', (req, res) => {

    res.json({
        menssage: "Get Images"
    })
})

app.get('/getImage/:id', (req, res) => {

    const id = req.params.id

    res.json({
        menssage: "Get Image",
        id
    })
})

app.post('/createImage', (req, res) => {

    const body = req.body

    res.json({
       body
    })
})
app.put('/updateImage/:id', (req, res) => {

    const id = req.params.id

    res.json({
        menssage: "Update Image",
        id
    })
})
app.delete('/deleteImage/:id', (req, res) => {

    const id = req.params.id

    res.json({
        menssage: "Delete Image",
        id
    })
})

module.exports = app