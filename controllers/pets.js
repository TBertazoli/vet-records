const User = require("../models/user");
// const vaccine = require("../models/vaccine");

module.exports = {
  create,
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
