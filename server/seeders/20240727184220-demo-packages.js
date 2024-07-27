"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Packages",
      [
        {
          name: "Bed & Breakfast",
          description: "Includes breakfast",
          price: 50.0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "All-Inclusive",
          description: "Includes all meals and drinks",
          price: 150.0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Packages", null, {});
  },
};
