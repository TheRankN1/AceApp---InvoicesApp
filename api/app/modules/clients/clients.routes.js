const express = require("express");
const router = express.Router();

const ClientsController = require("./clients.controller");

router.post("/createClient", ClientsController.createClient);
router.get("/readAllClients", ClientsController.readAllClients);
router.get("/readClientById/:id", ClientsController.readClientById);
router.patch("/updateClient/:id", ClientsController.updateClient);
router.delete("/deleteClient/:id", ClientsController.deleteClient);

module.exports = router;
