const db = require("./config/database");
const mongoose = require("mongoose");
const vaccine = require("./models/vaccine");

const seedAll = async () => {
  await db;
  console.log("conection estabilished");
  await vaccine.deleteMany({});
  console.log("vaccine model");

  await vaccine.insertMany(vaccineData);
  console.log("seed completed");
};

const vaccineData = [
  {
    species: "dog",
    vaccineName: "Rabies",
    description: "Protects against rabies virus",
    recommendedAge: "3 months",
    boosterFrequency: "Annually",
  },
  {
    species: "dog",
    vaccineName: "DHPP",
    description:
      "Protects against distemper, hepatitis, parainfluenza, and parvovirus",
    recommendedAge: "6-8 weeks",
    boosterFrequency: "Annually",
  },
  {
    species: "dog",
    vaccineName: "Bordetella",
    description: "Protects against kennel cough",
    recommendedAge: "2-4 weeks before exposure",
    boosterFrequency: "Every 6-12 months",
  },
  {
    species: "dog",
    vaccineName: "Lyme",
    description: "Protects against Lyme disease",
    recommendedAge: "9-12 weeks",
    boosterFrequency: "Annually",
  },
  {
    species: "dog",
    vaccineName: "Leptospirosis",
    description: "Protects against leptospirosis bacteria",
    recommendedAge: "12 weeks",
    boosterFrequency: "Annually",
  },
  {
    species: "dog",
    vaccineName: "Canine Influenza",
    description: "Protects against canine influenza virus",
    recommendedAge: "6-8 weeks",
    boosterFrequency: "Annually",
  },
  {
    species: "cat",
    vaccineName: "FVRCP",
    description:
      "Protects against feline viral rhinotracheitis, calicivirus, and panleukopenia",
    recommendedAge: "6-8 weeks",
    boosterFrequency: "Annually",
  },
  {
    species: "cat",
    vaccineName: "FeLV",
    description: "Protects against feline leukemia virus",
    recommendedAge: "8-12 weeks",
    boosterFrequency: "Annually",
  },
  {
    species: "cat",
    vaccineName: "Rabies",
    description: "Protects against rabies virus",
    recommendedAge: "12 weeks",
    boosterFrequency: "Annually",
  },
];

seedAll().then(() => {
  process.exit(0);
});
