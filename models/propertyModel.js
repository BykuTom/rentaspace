const mongoose = require("mongoose");

const propertySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A property must have a name"],
    unique: [true, "Property name must be unique"],
  },
  location: {
    type: String,
    required: [true, "A property must have a location"],
  },
  price: { type: Number, required: [true, "A property must have a price."] },
  deposit: { type: Number, required: [true, "A property must have a deposit"] },
  description: {
    type: String,
    required: [true, "A property must have a description"],
  },
  summary: {
    type: String,
    trim: true,
    required: [true, "A property must have a summary."],
  },
  author: { type: String, required: [true, "A property must have an author."] },
  imageCover: {
    type: String,
    required: [true, "A property must have a cover image."],
  },
  images: [String],
  postedAt: { type: Date, default: Date.now() },
});

const Property = mongoose.model("Property", propertySchema);

module.exports = Property;
