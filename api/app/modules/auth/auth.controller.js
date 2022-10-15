const UserCollection = require("../user/user.schema");
const { StatusCodes } = require("http-status-codes");
const joi = require("joi");
const bcrypt = require("bcrypt");
const { generateToken } = require("../passport/token-generator");

module.exports = {
  register(request, response) {
    registerFn(request.body)
      .then((newUser) => {
        response.write(JSON.stringify(newUser));
        response.end();
      })
      .catch((error) =>
        response
          .status(StatusCodes.BAD_REQUEST)
          .send({ message: error.message })
      );
  },

  login(request, response) {
    loginFn(request.body)
      .then((user) => {
        response.write(JSON.stringify(user));
        response.end();
      })
      .catch((error) =>
        response
          .status(StatusCodes.BAD_REQUEST)
          .send({ message: error.message })
      );
  },
};

async function registerFn(userProps) {
  const userFound = await UserCollection.findOne({
    $or: [{ username: userProps.username }],
  });
  if (userFound) {
    throw new Error("Username already exist");
  }

  const validateSchema = joi.object().keys({
    username: joi.string().min(5).max(25).required(),
    fullName: joi.string().min(7).max(25).required(),
    lastName: joi.string().min(5).max(25),
    email: joi.string().min(7).max(25).required(),
    password: joi.string().min(4).required(),
    isAdmin: joi.optional(),
  });

  isSchemaValid(validateSchema, userProps);

  function isSchemaValid(schema, body) {
    const { error } = schema.validate(body);
    if (error && error.details) throw new Error(error.details[0].message);

    return null;
  }

  const salt = await bcrypt.genSalt();
  const safePassword = await bcrypt.hash(userProps.password, salt);

  const newUser = {
    ...userProps,
    salt,
    password: safePassword,
  };

  await new UserCollection(newUser).save();
  return userProps;
}
async function loginFn(userProps) {
  const { username, password, email } = userProps;

  await validateProps(username, password, email);

  const userWithCorrectCredentials = await UserCollection.findOne({
    username,
  }).exec();

  if (!userWithCorrectCredentials)
    throw new Error("Username or Password or Email incorrect!");

  const accessToken = generateToken(userWithCorrectCredentials.toObject());
  return { accessToken };

  async function validateProps(username, password, email) {
    const userFound = await UserCollection.findOne({ username }).select(
      "+password"
    );

    if (userFound && (await bcrypt.compare(password, userFound.password))) {
      console.log(userFound);
      return userFound;
    }

    throw new Error("Password or User wrong!");
  }
}
