"use strict";
const bcrypt = require("bcryptjs");
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "users",
      [
        {
          name: "jhonat heberson",
          email: "jhonatheberson@outlook.com.br",
          password_hash: bcrypt.hashSync("123456", 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {},
};
