const mongoose = require("mongoose");

mongoose.connect(
  process.env.MONGOURL ||
    "mongodb+srv://Admin:rinisha12345@region-in-aws.xw2oq.mongodb.net/?retryWrites=true&w=majority&appName=Region-IN-AWS"
);

const connection = mongoose.connection;
connection.on("connected", () => {
  console.log("DB Connected");
});

connection.on("error", () => console.log("DB Error"));

module.exports = mongoose;