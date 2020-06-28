const express = require('express')
const bodyParser = require('body-parser')

require('dotenv').config();

const app = express()

//config Midelware 
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())


const port = process.env.PORT || 8282

app.use(require('./routes/routeImage'))


app.listen(port, () => {
    console.log(`servidor corriendo en el puerto ${port}`)
})