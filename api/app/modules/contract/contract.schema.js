const mongoose = require("mongoose");

const ContractSchema = mongoose.Schema({
  no: String,
  issuedAt: Date,
});

const ContractCollection = mongoose.model("Contract", ContractSchema);
module.exports = ContractCollection;
