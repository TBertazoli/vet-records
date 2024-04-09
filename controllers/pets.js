const User = require("../models/user");
const vaccine = require("../models/vaccine");

module.exports = {
  addPet,
};

async function addPet(req, res) {
  const user = await User.findById(req.params.id);
  user.pets.push(req.body);
}
