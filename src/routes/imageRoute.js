const express = require("express");
const Image = require("../models/imageModel");
const { messagueError } = require("../helper");
const { findByIdAndUpdate } = require("../models/imageModel");
const app = express();

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
  const body = req.body;

  const image = new Image({
    name: body.name,
    image: body.image,
  });

  try {
    const newImage = await image.save();
    res.json({ ok: true, image: newImage });
  } catch (err) {
    messagueError(res, 404, err);
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
