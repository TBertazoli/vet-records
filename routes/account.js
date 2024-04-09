const express = require("express");
const router = express.Router();
const session = require("express-session");
const passport = require("passport");

router.get("/", function (req, res, next) {
  console.log(req.user);

  res.render("account/index");
});

module.exports = router;
