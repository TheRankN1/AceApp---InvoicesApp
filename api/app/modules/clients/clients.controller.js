const { StatusCodes } = require("http-status-codes");
const clientsCollection = require("./clients.schema");

module.exports = {
  createClient(request, response) {
    createClientFn(request.body)
      .then((newClient) => {
        response.write(JSON.stringify(newClient));
        response.end();
      })
      .catch((error) =>
        response
          .status(StatusCodes.BAD_REQUEST)
          .send({ message: error.message })
      );
  },
  readAllClients(request, response) {
    readAllClientsFn()
      .then((client) => {
        response.write(JSON.stringify(client));
        response.end();
      })
      .catch((error) => {
        response
          .status(StatusCodes.BAD_REQUEST)
          .send({ message: error.message });
      });
  },
  readClientById(request, response) {
    const id = request.params.id;
    readClientByIdFn(id)
      .then((client) => {
        response.write(JSON.stringify(client));
        response.end();
      })
      .catch((error) => {
        response
          .status(StatusCodes.BAD_REQUEST)
          .send({ message: error.message });
      });
  },
  updateClient(request, response) {
    const id = request.params.id;
    updateClientFn(id, request.body)
      .then((client) => {
        response.write(JSON.stringify(client));
        response.end();
      })
      .catch((error) => {
        response
          .status(StatusCodes.BAD_REQUEST)
          .send({ message: error.message });
      });
  },
  deleteClient(request, response) {
    const id = request.params.id;
    deleteClientFn(id)
      .then(() => {
        response.write(JSON.stringify("Client Deleted"));
        response.end();
      })
      .catch((error) => {
        response
          .status(StatusCodes.BAD_REQUEST)
          .send({ message: error.message });
      });
  },
};

async function createClientFn(clientProps) {
  const newClient = await new clientsCollection(clientProps).save();
  return { _id: newClient._id };
}

async function readAllClientsFn() {
  return clientsCollection.find();
}

async function readClientByIdFn(id) {
  return clientsCollection.findById(id);
}

async function updateClientFn(id, clientProps) {
  return clientsCollection.findByIdAndUpdate(id, clientProps, { new: true });
}

async function deleteClientFn(id) {
  return clientsCollection.findByIdAndDelete(id);
}
