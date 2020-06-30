const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");

require("dotenv").config();

const app = express();

const port = process.env.PORT;
const url_db = 'mongodb+srv://ronal2:qPopKTPX5AfUvnbl@cluster0-znt1w.mongodb.net/cafe'

//config Midelware - bodyParser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

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
