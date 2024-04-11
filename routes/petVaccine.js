const express = require("express");
const router = express.Router();
const petVaccineCtrl = require("../controllers/petVaccine");

router.post("/account/pets/:id/vaccines", petVaccineCtrl.addVaccineToPet);

router.delete(
  "/account/pets/:petId/vaccines/:vaccineId",
  petVaccineCtrl.delete
);

module.exports = router;
