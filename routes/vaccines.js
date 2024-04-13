const express = require("express");
const router = express.Router();
const vaccineCtrl = require("../controllers/vaccines");

router.get("/", vaccineCtrl.show);

module.exports = router;
