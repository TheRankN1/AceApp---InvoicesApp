const { StatusCodes } = require("http-status-codes");
const featureCollection = require("./feature.schema");

module.exports = {
  createFeature(request, response) {
    createFeatureFn(request.body)
      .then((newFeature) => {
        response.write(JSON.stringify(newFeature));
        response.end();
      })
      .catch((error) =>
        response
          .status(StatusCodes.BAD_REQUEST)
          .send({ message: error.message })
      );
  },
  readFeatures(request, response) {
    readFeaturesFn()
      .then((features) => {
        response.write(JSON.stringify(features));
        response.end();
      })
      .catch((error) =>
        response
          .status(StatusCodes.BAD_REQUEST)
          .send({ message: error.message })
      );
  },
  readFeatureById(request, response) {
    const id = request.params.id;
    readFeatureByIdFn(id)
      .then((feature) => {
        response.write(JSON.stringify(feature));
        response.end();
      })
      .catch((error) =>
        response
          .status(StatusCodes.BAD_REQUEST)
          .send({ message: error.message })
      );
  },
  updateFeature(request, response) {
    const id = request.params.id;
    updateFeatureFn(id, request.body)
      .then((feature) => {
        response.write(JSON.stringify(feature));
        response.end();
      })
      .catch((error) =>
        response
          .status(StatusCodes.BAD_REQUEST)
          .send({ message: error.message })
      );
  },
  deleteFeature(request, response) {
    const id = request.params.id;
    deleteFeatureFn(id)
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

async function createFeatureFn(featureProps) {
  const newFeature = await new featureCollection(featureProps).save();
  return newFeature;
}
async function readFeaturesFn() {
  return featureCollection.find();
}
async function readFeatureByIdFn(id) {
  return featureCollection.findById(id);
}
async function updateFeatureFn(id, featureProps) {
  return featureCollection.findByIdAndUpdate(id, featureProps, { new: true });
}
async function deleteFeatureFn(id) {
  return featureCollection.findByIdAndDelete(id);
}
