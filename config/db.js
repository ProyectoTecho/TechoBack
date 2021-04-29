const mongoose = require("mongoose");
require("dotenv").config();

const { MONGO_USER, MONGO_PASS } = process.env;

const connection = `mongodb://${MONGO_USER}:${MONGO_PASS}@mongo:27017`
mongoose.connect(connection, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(()=> console.log("db connect"))
.catch((e) => console.log("db no connect"))

