const { StatusCodes } = require("http-status-codes");
const contractCollection = require("./contract.schema");

module.exports = {
  createContract(request, response) {
    createContractFn(request.body)
      .then((newContract) => {
        response.write(JSON.stringify(newContract));
        response.end();
      })
      .catch((error) =>
        response
          .status(StatusCodes.BAD_REQUEST)
          .send({ message: error.message })
      );
  },
  getContracts(request, response) {
    getContractsFn()
      .then((contracts) => {
        response.write(JSON.stringify(contracts));
        response.end();
      })
      .catch((error) =>
        response
          .status(StatusCodes.BAD_REQUEST)
          .send({ message: error.message })
      );
  },
  getContractById(request, response) {
    const id = request.params.id;
    getContractByIdFn(id)
      .then((contract) => {
        response.write(JSON.stringify(contract));
        response.end();
      })
      .catch((error) =>
        response
          .status(StatusCodes.BAD_REQUEST)
          .send({ message: error.message })
      );
  },
  updateContract(request, response) {
    const id = request.params.id;
    updateContractFn(id, request.body)
      .then((newContract) => {
        response.write(JSON.stringify(newContract));
        response.end();
      })
      .catch((error) =>
        response
          .status(StatusCodes.BAD_REQUEST)
          .send({ message: error.message })
      );
  },
  deleteContract(request, response) {
    const id = request.params.id;
    deleteContractFn(id)
      .then((newContract) => {
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

async function createContractFn(contractProps) {
  return contractCollection(contractProps).save();
}
async function getContractsFn() {
  return contractCollection.find();
}
async function getContractByIdFn(id) {
  return contractCollection.findById(id);
}
async function updateContractFn(id, contractProps) {
  return contractCollection.findByIdAndUpdate(id, contractProps, {
    new: true,
  });
}
async function deleteContractFn(id) {
  return contractCollection.findByIdAndDelete(id);
}
