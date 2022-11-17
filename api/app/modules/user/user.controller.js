const { StatusCodes } = require("http-status-codes");
const UsersCollection = require("./user.schema");

module.exports = {
  getUsers(request, response) {
    getUserFn()
      .then((users) => {
        response.write(JSON.stringify(users));
        response.end();
      })
      .catch((error) => {
        response
          .status(StatusCodes.BAD_REQUEST)
          .send({ message: error.message });
      });
  },
};
async function getUserFn() {
  return UsersCollection.find();
}
