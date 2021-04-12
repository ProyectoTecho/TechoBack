const express = require("express");
const cors = require('cors')
require("./config/db");

const app = express();
app.use(cors())

const morgan = require("morgan");
const routes = require("./routes");

app.use(morgan("tiny"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use("/api", routes);

const port = process.env.PORT;

app.listen(port, () => console.log("Listening in port 8080"));