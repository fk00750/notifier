const mongoose = require("mongoose");
const logger = require("winston");

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

db.on("open", () => {
  logger.info("Mongodb Connected");
});

db.on("error", err => {
  logger.error({
    message: "Error in Connecting to Mongo",
    error: err
  });
});

module.exports = db;
