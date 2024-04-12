const User = require("../models/user");

module.exports = {
  addVaccineToPet,
  delete: deleteVaccine,
  update,
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

async function update(req, res) {
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
  const assingVaccine = pet.vaccines.find((vaccine) => {
    return vaccine.vaccine.id === req.params.vaccineId;
  });
  assingVaccine.dateTaken = req.body.dateTaken;
  assingVaccine.vaccine = req.body.vaccineId;
  await user.save();
  res.redirect(`/account/${pet.id}`);
}
