const express = require("express");
const router = express.Router();
const petsCtrl = require("../controllers/pets");

router.post("/account/pets", petsCtrl.create);
router.get("/account/:id", petsCtrl.show);

module.exports = router;
