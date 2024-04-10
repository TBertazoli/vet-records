const express = require("express");
const router = express.Router();
const session = require("express-session");
const passport = require("passport");

router.get("/", function (req, res, next) {
  if (req.user === undefined) {
    res.render("/");
  }
  res.render("account/index");
});

module.exports = router;
