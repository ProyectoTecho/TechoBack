require("dotenv").config();

const { DB_NAME } = process.env;

const mongoose = require("mongoose");

mongoose.connect(DB_NAME, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(()=> console.log("db connect"))
.catch((e) => console.log("db no connect"))

