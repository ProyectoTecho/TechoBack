const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://techo:techo@techo.2k9wu.mongodb.net/techo?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(()=> console.log("db connect"))
.catch((e) => console.log("db no connect"))

