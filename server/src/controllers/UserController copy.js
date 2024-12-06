const bcrypt = require("bcrypt");
const UserValidator = require("../utils/userValidator");
const formatResponse = require("../utils/formatResponse");
const UserService = require("../services/User.service");
const { json } = require("sequelize");

class userController {
  static async signUp(req, res) {
    const { name, email, password, role } = req.body;

    const normalizedEmail = email.toLowerCase();

    const { isValid, error } = UserValidator.validateSignUp({
      name,
      email: normalizedEmail,
      password,
      role,
    });

    if (!isValid) {
      return res
        .status(400)
        .json(formatResponse(400, "Validation error", null, error));
    }

    try {
      const userFound = await UserService.findByEmail(normalizedEmail);

      if (userFound) {
        return res
          .status(400)
          .json(
            formatResponse(
              400,
              `A user with email - ${email} already exists`,
              null,
              `A user with email - ${email} already exists`
            )
          );
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      const newUser = await UserService.create({
        name,
        email: normalizedEmail,
        password: hashedPassword,
        role,
      });

      const plainUser = newUser.get();
      delete plainUser.password;

      res
        .status(201)
        .json(formatResponse(201, "Successfuly signUp", plainUser));
    } catch ({ message }) {
      console.error(message);
      res
        .status(500)
        .json(formatResponse(500, "Internal server error", null, message)); //3 аргумент - data, но тк даты нет, нул и сообщ об ошибке
    }
  }

  static async signIn(req, res) {
    const { email, password, role } = req.body;

    const normalizedEmail = email.toLowerCase();

    const { isValid, error } = UserValidator.validateSignUI({
      email: normalizedEmail,
      password,
      role,
    });

    if (!isValid) {
      return res
        .status(400)
        .json(formatResponse(400, "Validation error", null, error));
    }

    try {
      const user = await UserService.findByEmail(normalizedEmail);

      if (!user) {
        return res
          .status(404)
          .json(
            formatResponse(
              404,
              `User with email = ${email} not found`,
              null,
              `User with email = ${email} not found`
            )
          );
      }

      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (!isPasswordValid) {
        return res
          .status(401)
          .json(
            formatResponse(401, `Invalid password`, null, `Invalid password`)
          );
      }

      const plainUser = user.get();
      delete plainUser.password;

      res.status(200).json(formatResponse(200, "Successfuly signIn", user));
    } catch ({ message }) {
      console.error(message);
      res
        .status(500)
        .json(formatResponse(500, "Internal server error", null, message)); 
    }
  }
}

module.exports = userController;
