const express = require("express");
const app = express();
const dbConn = require("./config/db");
require("dotenv").config();

const port = process.env.PORT || 7778;

//const dotenv=require('dotenv')
//dotenv.config()

app.use(express.json());
app.get("/", (req, res) => {
  res.json({ message: "Welcome" });
});

app.listen(port, () => {
  console.log(`Server running in : ${port}`);
});