const mongoose = require("mongoose");

const ContractSchema = mongoose.Schema({
  no: String,
  issuedAt: {
    type: Date,
    default: Date.now(),
  },
});

const ContractCollection = mongoose.model("Contract", ContractSchema);
module.exports = ContractCollection;
