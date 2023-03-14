const mongoose = require("mongoose");

//when we use mongoose we need to make a Schema
const reviewSchema = new mongoose.Schema({
  body: { type: String, required: true },
  author: { type: String, required: true },
});
// console.log(reviewSchema.createdAt)
// console.log('schema')

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;
