const mongoose = require("mongoose");
let EntityEnum = require("../../shared/enums/entity.enum");

const clientsSchema = mongoose.Schema({
  name: String,
  entity: {
    type: String,
    enum: EntityEnum,
  },
  cui: String,
  cnp: String,
  address: String,
  city: String,
  country: String,
  zipcode: String,
  contactPersonName: String,
  phone: String,
  email: String,
  website: String,
  userId: String,
});

const clientsCollection = mongoose.model("clients", clientsSchema);
module.exports = clientsCollection;
