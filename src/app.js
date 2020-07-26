const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const cors = require('cors')

require("dotenv").config();

const app = express();

const port = process.env.PORT;
const url_db = 'mongodb://localhost:27017/img'

//config Midelware 
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/img', express.static(`${__dirname}/img`))


mongoose.connect(
  url_db,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err, res) => {
    if (err) {
      return console.log(err);
    }
    console.log('connection DB')
  }
);

app.use(require("./routes/imageRoute"));
    
app.listen(port, () => {
  console.log(`server on port ${port}`);
});
