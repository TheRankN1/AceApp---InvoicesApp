const express = require("express");
const router = express.Router();

const ConfigController = require("./config.controller");

router.post("/createConfig", ConfigController.createConfig);
router.get("/getConfigs", ConfigController.getConfig);
router.get("/getConfigById/:id", ConfigController.getConfigById);
router.patch("/updateConfig/:id", ConfigController.updateConfig);
router.delete("/deleteConfig/:id", ConfigController.deleteConfig);

module.exports = router;
