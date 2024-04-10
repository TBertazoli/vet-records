const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const petVaccineSchema = new Schema({
  species: {
    type: String,
    required: true,
  },
  vaccineName: {
    type: String,
    required: true,
  },
  age: {
    type: String,
  },
  dateTaken: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model("PetVaccine", petVaccineSchema);
