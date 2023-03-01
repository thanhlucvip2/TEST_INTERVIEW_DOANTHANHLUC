const express = require("express");
const jokesRouter = express.Router();
const JokesModel = require("../../model/jokes.model");
const constructorPattern = require("../../constants/base-response");

const checkLikeAction = async (req, res, next) => {
  const { like, dislike, id } = req.query;
  if (like && dislike) {
    try {
      await JokesModel.findOneAndUpdate({ _id: id }, { like, dislike });
    } catch (error) {}
  }
  next();
};
jokesRouter.get("/all", checkLikeAction, async (req, res) => {
  const { page, size, action } = req.query;
  const cookie = req.headers?.cookies ?? "";
  let arrayFind = [];
  if (cookie) {
    arrayFind = JSON.parse(cookie);
  }

  try {
    var userCount = await JokesModel.count("_id");
    const skip = (page < 0 ? 0 : +page - 1) * +size;
    const allJokes = await JokesModel.find({
      _id: { $nin: arrayFind },
    })
      .skip(skip)
      .limit(+size);

    res.json(
      new constructorPattern("Success", "Thành công", {
        item: allJokes,
        total: userCount,
      })
    );
  } catch (error) {
    res.json(new constructorPattern("Error", "Thất bại", error));
  }
});

jokesRouter.get("/by-id/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const oneJokes = await JokesModel.findOne({ _id: id });
    res.json(new constructorPattern("Success", "Thành công", oneJokes));
  } catch (error) {
    res.json(new constructorPattern("Error", "Thất bại", error));
  }
});

jokesRouter.post("/create", async (req, res) => {
  const { title, content } = req.body;

  const newData = await JokesModel.create({
    title,
    content,
    like: 0,
    dislike: 0,
  });
  if (newData) {
    res.json(
      new constructorPattern("Success", "Tạo jokes thành công", newData)
    );
  } else {
    res.json(new constructorPattern("Error", "Tạo jokes thất bại", null));
  }
});
module.exports = jokesRouter;
