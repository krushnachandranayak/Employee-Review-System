const mongoose = require("mongoose");

// Connection to mongodb.
mongoose.connect("mongodb+srv://krushnachandranayak308:Sunil123@cluster0.whbfr2d.mongodb.net/ERS?retryWrites=true&w=majority"); 


const db = mongoose.connection; // db store the connection

// cheacking the connection
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("DATABASE connection is Established");
});

// exporting the connection.
module.exports = db;
