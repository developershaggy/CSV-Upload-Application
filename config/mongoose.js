const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://shaggy:gtavice@cluster0.360a3kz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/csvUploads"
);

const db = mongoose.connection;

db.once("open", function () {
  console.log("database connected to the server successfully!");
});

module.exports = db;
