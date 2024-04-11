const User = require("../models/user");
const Vaccines = require("../models/vaccine");

module.exports = {
  addToPet,
};

// async function create(req, res) {
//   req.user = {
//     _id: "66174bf5ba6b3f88b95c2e0c",
//   };
//   const user = await User.findById(req.user._id);
//   const pet = user.pets.find((pet) => pet.id === req.params.id);
//   const vaccine = await Vaccines.findById(req.body.id);
//   // const petVaccine = new PetVaccine({
//   //   vaccine: vaccine,
//   //   dateTaken: new Date(),
//   //   age: 1,
//   // });
//   // await petVaccine.save();
//   pet.vaccines.push({
//     vaccine: vaccine,
//     dateTaken: req.body.dateTaken,
//   });

//   try {
//     await user.save();
//   } catch (err) {
//     console.log(err);
//   }
//   res.redirect(`/account/${pet.id}`);
// }

async function addToPet(req, res) {
  req.user = {
    _id: "6617ff095cbc73992c51656f",
  };
  const user = await User.findById(req.user._id);
  const pet = user.pets.find((pet) => pet.id === req.params.id);
  // The pet array holds the performer's ObjectId (referencing)
  pet.vaccines.push({
    vaccine: req.body.vaccineId,
    dateTaken: req.body.dateTaken,
  });
  await user.save();
  res.redirect(`/account/${pet.id}`);
}
