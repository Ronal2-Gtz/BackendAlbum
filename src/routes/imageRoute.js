const express = require("express");
const Image = require("../models/imageModel");
const fileUpload = require('express-fileupload')
const uuid = require('uuid')
const { messagueError } = require("../helper");

const app = express();

app.use(fileUpload());

app.get("/getImages", async (req, res) => {
  const skip = Number(req.query.skip || 0);
  const limit = Number(req.query.next || 5);

  try {
    const totalImages = await Image.count({});
    const listImages = await Image.find({}).skip(skip).limit(limit);
    res.json({
      ok: true,
      Total: totalImages,
      images: listImages,
    });
  } catch (err) {
    messagueError(res, 404, err);
  }
});

app.get("/getImage/:id", async (req, res) => {
  const id = req.params.id;

  try {
      const image = await Image.findById(id)
      res.json({
        ok: true,
        image
      });
  } catch (err) {
    messagueError(res, 404, err);
  }
});

app.post("/createImage", async (req, res) => {
  const namedb = req.body.name;

  const validExtensions = ["png", "jpg", "gif", "jpeg"];

  const dataImage = req.files.dataImage;
  const nameImage = dataImage.name.split(".");
  const extensionImage = nameImage[nameImage.length - 1];

  const nameFile = `${namedb}-${dataImage.name}-${uuid.v4()}.${extensionImage}`;

  const routeImage = nameFile

  const image = new Image({
    name: namedb,
    image: routeImage,
  });

  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send("No files were uploaded.");
  }

  if (validExtensions.indexOf(extensionImage) < 0) {
    return messagueError(
      res,
      400,
      `Invalid extension - extensions allowed [ ${validExtensions.join(" - ")} ]`
    );
  }

  try {
    const newImage = await image.save();
    await dataImage.mv(`img/${nameFile}`);
    res.json({ ok: true, messague: "Uploaded image", image: newImage });
  } catch (err) {
    return messagueError(res, 500, err);
  }
});

app.put("/updateImage/:id", async (req, res) => {
  const id = req.params.id;
  const { name, image } = req.body;

  try {
    const updateImage = await Image.findByIdAndUpdate(
      id,
      { name, image },
      { new: true }
    );
    res.json({ ok: true, menssage: "Image Update", image: updateImage });
  } catch (err) {
    messagueError(res, 404, err);
  }
});

app.delete("/deleteImage/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const deleteImage = await Image.findByIdAndDelete(id);
    res.json({ ok: true, menssage: "Delet image" });
  } catch (err) {
    return messagueError(res, 404, err);
  }
});

module.exports = app;
