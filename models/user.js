const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const vaccineSchema = new Schema({
  vaccine: {
    type: Schema.Types.ObjectId,
    ref: "Vaccine",
  },
  dateTaken: {
    type: Date,
    required: true,
  },
});

const petSchema = new Schema({
  petName: {
    type: String,
  },
  species: {
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

  vaccines: [vaccineSchema],
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
