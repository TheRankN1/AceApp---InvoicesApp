const mongoose = require("mongoose");
const CompanyInfo = require("/api/app/modules/company/company.schema");
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

const ConfigCollection = mongoose.model("Contract", ConfigSchema);
module.exports = ConfigCollection;
