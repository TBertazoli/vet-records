const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const petVaccineSchema = new Schema({
  species: {
    type: String,
    required: true,
  },
  vaccineName: [
    {
      type: Schema.Types.ObjectId,
      ref: "Vaccine",
    },
  ],
  age: {
    type: number,
  },
  dateTaken: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model("PetVaccine", petVaccineSchema);
