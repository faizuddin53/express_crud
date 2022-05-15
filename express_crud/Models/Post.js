// models/Post.js

const mongoose = require("mongoose");
let Schema = mongoose.Schema;

let postSchema = new Schema(
  {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    author: {
      type: String,
    },
  },
  { timestamps: true }
);

let PostMOdel = mongoose.model("post", postSchema);

module.exports = PostMOdel;