const mongoose = require("mongoose");

let CurrencyEnum = require("../../shared/enums/currency.enum");
let UnitEnum = require("../../shared/enums/unit.enum");

const featureSchema = mongoose.Schema({
  name: String,
  unit: {
    type: String,
    enum: UnitEnum,
  },
  price: Number,
  currency: {
    type: String,
    enum: CurrencyEnum,
  },
});

const featureCollection = mongoose.model("feature", featureSchema);
module.exports = featureCollection;
