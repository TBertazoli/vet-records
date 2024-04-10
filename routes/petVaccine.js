const express = require("express");
const router = express.Router();
const petVaccineCtrl = require("../controllers/petVaccine");

router.get("/account/:id", petVaccineCtrl.show);
router.post("/account/pets/:id/vaccine", petVaccineCtrl.create);
// router.get("/account/:id", petsCtrl.show);

module.exports = router;
