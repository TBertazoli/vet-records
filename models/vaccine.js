const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const vaccineListSchema = new Schema({
  species: {
    type: String,
    required: true,
  },
  vaccineName: {
    type: String,
    required: true,
  },
  description: String,
  recommendedAge: String,
  boosterFrequency: String,
});

module.exports = mongoose.model("Vaccine", vaccineListSchema);
