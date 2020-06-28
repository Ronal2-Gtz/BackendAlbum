const express = require("express");
const Image = require("../models/imageModel");
const { messagueError } = require("../helper");
const app = express();

app.get("/getImages", async (req, res) => {});

app.get("/getImage/:id", (req, res) => {
  const id = req.params.id;

  res.json({
    menssage: "Get Image",
    id,
  });
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

app.put("/updateImage/:id", (req, res) => {
  const id = req.params.id;

  res.json({
    menssage: "Update Image",
    id,
  });
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
