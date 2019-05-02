var express = require("express");
var router = express.Router();
/* GET Add Items page. */
router.get("/", function(req, res, next) {
  res.render("addItems", {
    title: "Add a New Item"

  });
});

module.exports = router;
