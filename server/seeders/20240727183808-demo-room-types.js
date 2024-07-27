"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "RoomTypes",
      [
        {
          name: "Standard",
          description: "Standard room type",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Deluxe",
          description: "Deluxe room type",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("RoomTypes", null, {});
  },
};
