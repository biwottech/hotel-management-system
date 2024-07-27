"use strict";
const bcrypt = require("bcrypt");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const hashedPassword = await bcrypt.hash("password123", 10);
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          email: "john.doe@example.com",
          password: hashedPassword,
          confirmed: true,
          employeeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "jane.doe@example.com",
          password: hashedPassword,
          confirmed: false,
          employeeId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};