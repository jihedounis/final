const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: String,
  img:String,
  color: String,
  size: String,
  prix: String,
  description:String,
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
