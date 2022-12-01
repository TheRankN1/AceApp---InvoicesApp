const configCollection = require("./config.schema");
const { StatusCodes } = require("http-status-codes");

module.exports = {
  createConfig(request, response) {
    createConfigFn(request.body)
      .then((newConfig) => {
        response.write(JSON.stringify(newConfig));
        response.end();
      })
      .catch((error) =>
        response
          .status(StatusCodes.BAD_REQUEST)
          .send({ message: error.message })
      );
  },
  getConfig(request, response) {
    getConfigFn()
      .then((allConfigs) => {
        response.write(JSON.stringify(allConfigs));
        response.end();
      })
      .catch((error) =>
        response
          .status(StatusCodes.BAD_REQUEST)
          .send({ message: error.message })
      );
  },
  getConfigById(request, response) {
    const id = request.params.id;
    getConfigByIdFn(id)
      .then((config) => {
        response.write(JSON.stringify(config));
        response.end();
      })
      .catch((error) =>
        response
          .status(StatusCodes.BAD_REQUEST)
          .send({ message: error.message })
      );
  },
  updateConfig(request, response) {
    const id = request.params.id;
    updateConfigFn(id, request.body)
      .then((config) => {
        response.write(JSON.stringify(config));
        response.end();
      })
      .catch((error) =>
        response
          .status(StatusCodes.BAD_REQUEST)
          .send({ message: error.message })
      );
  },
  deleteConfig(request, response) {
    const id = request.params.id;
    deleteConfigFn(id)
      .then(() => {
        response.write(JSON.stringify({}));
        response.end();
      })
      .catch((error) =>
        response
          .status(StatusCodes.BAD_REQUEST)
          .send({ message: error.message })
      );
  },
};

async function createConfigFn(configProps) {
  return new configCollection(configProps).save();
}
async function getConfigFn() {
  return configCollection.find();
}
async function getConfigByIdFn(id) {
  return configCollection.findById(id);
}
async function updateConfigFn(id, configProps) {
  return configCollection.findByIdAndUpdate(id, configProps, { new: true });
}
async function deleteConfigFn(id) {
  return configCollection.findByIdAndDelete(id);
}
