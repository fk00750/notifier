var express = require("express");
var router = express.Router();

/* GET home page. */

router.get("/", function (req, res, next) {
  res
    .status(401)
    .send("Stop trying to ping up.. We will kick your nuts down >.<");
});
router.get("**", (req, res) => {
  res
    .status(401)
    .send("Stop trying to ping up.. We will kick your nuts down >.<");
});

module.exports = router;
