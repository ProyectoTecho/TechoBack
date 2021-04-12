const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  amount: {
    type: Number,
    default: 600,
  },
  time: {
    type: String,
    required: true,
  },
  dni: {
      type: Number,
  },
  province: {
    type: String,
  },
  creditCard: {
    type: Number,
  },
  typeCard: {
    type: String,
  },

});

const User = mongoose.model("User", userSchema);
module.exports = User;
