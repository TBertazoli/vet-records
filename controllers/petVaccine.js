const PetVaccine = require("../models/petVaccine");
const User = require("../models/user");
const Vaccines = require("../models/vaccine");

module.exports = {
  create,
};

async function create(req, res) {
  req.user = {
    _id: "6617133070ff2f978d569f02",
  };
  const user = await User.findById(req.user._id);
  const pet = user.pets.find((pet) => pet.id === req.params.id);
  const vaccine = await Vaccines.findById(req.body.id);
  // const petVaccine = new PetVaccine({
  //   vaccine: vaccine,
  //   dateTaken: new Date(),
  //   age: 1,
  // });
  // await petVaccine.save();
  pet.vaccines.push({
    vaccine: vaccine,
    dateTaken: new Date(),
    age: 1,
  });

  try {
    await user.save();
  } catch (err) {
    console.log(err);
  }
  res.redirect(`/account/${pet.id}`);
}
