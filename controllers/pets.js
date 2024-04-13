const { Aggregate } = require("mongoose");
const User = require("../models/user");
const Vaccine = require("../models/vaccine");

module.exports = {
  create,
  show,
  delete: deletePet,
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
  if (req.user === undefined) {
    res.redirect("/");
    return;
  }

  const user = await User.findById(req.user._id).populate({
    path: "pets",
    populate: {
      path: "vaccines",
      populate: {
        path: "vaccine",
      },
    },
  });
  const pet = user.pets.find((pet) => pet.id === req.params.id);
  const dob = checkAge(pet.petDateOfBirth);
  const vaccines = await Vaccine.find({ species: pet.species });
  console.log(JSON.stringify(pet));

  res.render("pets/show", {
    pet,
    dob,
    vaccines,
  });
}

async function deletePet(req, res) {
  const user = await User.findById(req.user._id).populate({
    path: "pets",
  });
  const pet = user.pets.findIndex((p) => p.id === req.params.petId);
  user.pets.splice(pet, 1);
  await user.save();
  res.redirect(`/account`);
}
