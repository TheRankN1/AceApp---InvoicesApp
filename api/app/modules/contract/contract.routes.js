const express = require("express");
const router = express.Router();

const ContractController = require("./contract.controller");

router.post("/createContract", ContractController.createContract);
router.get("/getContracts", ContractController.getContracts);
router.get("/getContractById/:id", ContractController.getContractById);
router.patch("/updateContract/:id", ContractController.updateContract);
router.delete("/deleteContract/:id", ContractController.deleteContract);

module.exports = router;
