const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const vaccineSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
  },
  dateTaken: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model("Vaccine", vaccineSchema);
