const express = require('express')
const app = express()

const port = 3000

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
    res.json({
        menssage: "Create Image"
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

app.listen(port, () => {
    console.log(`servidor corriendo en el puerto ${port}`)
})