const Vaccine = require("../models/vaccine");

module.exports = {
  show,
};

async function show(req, res) {
  const vaccines = await Vaccine.find({});
  res.render("vaccines/index", {
    vaccines,
  });
}
