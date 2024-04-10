const User = require("../models/user");


module.exports = {
  create,  
};

async function create(req, res) {
  const user = await User.findById(req.user._id);
  const pet = user.pets.find((pet) => pet.id === req.params.id);
  if (pet.vaccine === undefined) {
    pet.vaccine = [];
  }
  pet.vaccine.push(req.body);
  try {
    await user.save();
  } catch (err) {
    console.log(err);
  }
  res.redirect("/account/:id");
}

/