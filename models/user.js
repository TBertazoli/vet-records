const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const petSchema = new Schema({
  name: {
    type: String,
  },
  type: {
    type: String,
    enum: ["dog", "cat"],
    required: true,
  },

  dateOfBirth: {
    type: Date,
    required: true,
  },
  Breed: {
    type: String,
  },

  vaccine: [
    {
      type: Schema.Types.ObjectId,
      ref: "Vaccine",
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
