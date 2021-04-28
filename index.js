const express = require("express");
const cors = require('cors');
require("./config/db");
const path = require("path")
const app = express();
require('dotenv').config()

app.use(cors());

const morgan = require("morgan");
const routes = require("./routes");

app.use(morgan("tiny"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.resolve(__dirname, "../TechoFront/front/build")))

app.use("/api", routes);

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Listening in port ${PORT}`));