const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://thanhlucvip:thanhlucvip@jokes.w43u7nc.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected!"));

const JokesSchema = new mongoose.Schema(
  {
    title: String,
    content: String,
    like: Number,
    dislike: Number,
  },
  {
    collection: "Jokes",
  }
);

const JokesModel = mongoose.model("jokes", JokesSchema);

module.exports = JokesModel;
