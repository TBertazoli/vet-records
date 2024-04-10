const Vaccine = require("../models/vaccine");

module.exports = {
  show,
};

async function show(req, res) {
  const vaccine = await Vaccine.find({});
  res.render("addVaccineModal/show", { vaccine });
}
