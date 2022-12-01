const express = require("express");
const app = express();
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const PORT = 3000;
const MONGO_URL = "mongodb://localhost:27017/Ace";

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(require("cors")());

const authRoutes = require("./app/modules/auth/auth.routes");
app.use("/api", authRoutes);

const clientsRoutes = require("./app/modules/clients/clients.routes");
app.use("/api", clientsRoutes);

const usersRoutes = require("./app/modules/user/user.routes");
app.use("/api", usersRoutes);

const featureRoutes = require("./app/modules/feature/feature.routes");
app.use("/api", featureRoutes);

const contractRoutes = require("./app/modules/contract/contract.routes");
app.use("/api", contractRoutes);

const configRoutes = require("./app/modules/config/config.routes");
app.use("/api", configRoutes);

mongoose.connect(MONGO_URL, function (err) {
  if (err) {
    console.log("Mongo error!", err);
  }
  console.log("Data base is ready!");
  app.listen(PORT, function () {
    console.log("Server started: ", `Listening to port ${PORT}`);
  });
});
