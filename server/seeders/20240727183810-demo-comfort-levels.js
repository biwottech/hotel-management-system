"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "ComfortLevels",
      [
        {
          name: "Basic",
          description: "Basic comfort level",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Premium",
          description: "Premium comfort level",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("ComfortLevels", null, {});
  },
};
