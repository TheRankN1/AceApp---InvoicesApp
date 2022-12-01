const mongoose = require("mongoose");

const CompanySchema = mongoose.Schema({
  companyName: String,
  ownerName: String,
  numberOfEmployees: Number,
  address: String,
  city: String,
  country: String,
  zipcode: String,
  phone: String,
});

const CompanyCollection = mongoose.model("Company", CompanySchema);
module.exports = CompanyCollection;
