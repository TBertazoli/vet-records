const express = require("express");
const router = express.Router();
const dogsCtrl = require("../controllers/vaccines");

router.get("/vaccines", dogsCtrl.show);

module.exports = router;
