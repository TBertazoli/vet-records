const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const petSchema = new Schema({
  petName: {
    type: String,
  },
  petType: {
    type: String,
    enum: ["dog", "cat"],
    required: true,
  },

  petDateOfBirth: {
    type: Date,
    required: true,
  },
  breed: {
    type: String,
  },

  vaccine: [
    {
      type: Schema.Types.ObjectId,
      ref: "PetVaccine",
    },
  ],
});

const userSchema = new Schema(
  {
    name: String,
    googleId: {
      type: String,
      required: true,
    },
    email: String,
    avatar: String,
    pets: [petSchema],
  },

  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
