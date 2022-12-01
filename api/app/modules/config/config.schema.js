const mongoose = require("mongoose");
const CompanyInfo = require("../company/company.schema").schema;
const ConfigSchema = mongoose.Schema({
  batchNumbers: String,
  issuedAt: {
    type: Date,
    default: Date.now(),
  },
  defaultBatchNumber: {
    type: String,
    default: "DEV",
  },
  iban: {
    ron: String,
    euro: String,
    usd: String,
  },
  company: CompanyInfo,
});

const ConfigCollection = mongoose.model("Config", ConfigSchema);
module.exports = ConfigCollection;
