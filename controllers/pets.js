const User = require("../models/user");

module.exports = {
  create,
  show,
};

async function create(req, res) {
  console.log(req.user);
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

async function show(req, res) {
  // temporarly hardcode user id because of nodeamon
  req.user = {
    _id: "6614ad01aa3f9a01a49cf081",
  };
  const user = await User.findById(req.user._id);
  const pet = user.pets.find((pet) => pet.id === req.params.id);
  const vaccine = pet.vaccine.find({});
  res.render("pets/show", {
    pet,
    vaccine,
  });
}
