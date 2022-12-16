const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
  name: String,
  product: String,
  number: String,
  date: String,
  prix: String,
});

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
