const User = require("../models/user");

module.exports = {
  addVaccineToPet,
  delete: deleteVaccine,
};

async function addVaccineToPet(req, res) {
  const user = await User.findById(req.user._id);
  const pet = user.pets.find((pet) => pet.id === req.params.id);
  pet.vaccines.push({
    vaccine: req.body.vaccineId,
    dateTaken: req.body.dateTaken,
  });
  await user.save();
  res.redirect(`/account/${pet.id}`);
}

async function deleteVaccine(req, res) {
  req.user = {
    _id: "6617ff095cbc73992c51656f",
  };
  const user = await User.findById(req.user._id).populate({
    path: "pets",
    populate: {
      path: "vaccines",
      populate: {
        path: "vaccine",
      },
    },
  });
  const pet = user.pets.find((pet) => pet.id === req.params.petId);
  const vaccineIndex = pet.vaccines.findIndex(
    (v) => v.id === req.params.vaccineId
  );
  pet.vaccines.splice(vaccineIndex, 1);
  await user.save();
  res.redirect(`/account/${pet.id}`);
}
