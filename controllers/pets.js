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

function calculateAge(dob) {
  const dateOfBirth = new Date().getTime() - dob.getTime();
  console.log(dateOfBirth);
}

async function show(req, res) {
  // temporarly hardcode user id because of nodeamon
  req.user = {
    _id: "6617133070ff2f978d569f02",
  };
  const user = await User.findById(req.user._id);
  const pet = user.pets.find((pet) => pet.id === req.params.id);
  const vaccines = await Vaccine.find({ species: pet.species });
  const birthday = res.render("pets/show", {
    pet,
    vaccines,
  });
}
