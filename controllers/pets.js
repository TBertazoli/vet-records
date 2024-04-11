const { Aggregate } = require("mongoose");
const User = require("../models/user");
const Vaccine = require("../models/vaccine");

module.exports = {
  create,
  show,
};

async function create(req, res) {
  const user = await User.findById(req.user._id);

  if (user.pets === undefined) {
    user.pets = [];
  }
  user.pets.push(req.body);
  try {
    await user.save();
  } catch (err) {
    console.log(err);
  }
  res.redirect("/account");
}

function checkAge(birth) {
  const today = new Date();
  const age = (today - birth) / (1000 * 60 * 60 * 24 * 365);
  return age;
}

async function show(req, res) {
  // temporarly hardcode user id because of nodeamon
  req.user = {
    _id: "66174bf5ba6b3f88b95c2e0c",
  };
  const user = await User.findById(req.user._id);
  const pet = user.pets.find((pet) => pet.id === req.params.id);
  const dob = checkAge(pet.petDateOfBirth);
  // const vaccines = await Vaccine.find({ species: pet.species });

  res.render("pets/show", {
    pet,
    dob,
  });
}
