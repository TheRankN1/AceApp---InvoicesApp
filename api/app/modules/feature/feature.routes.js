const express = require("express");
const router = express.Router();

const FeatureController = require("./feature.controller");

router.post("/createFeature", FeatureController.createFeature);
router.get("/readFeatures", FeatureController.readFeatures);
router.get("/readFeatureById/:id", FeatureController.readFeatureById);
router.patch("/updateFeature/:id", FeatureController.updateFeature);
router.delete("/deleteFeature/:id", FeatureController.deleteFeature);

module.exports = router;
