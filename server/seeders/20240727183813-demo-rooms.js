"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Rooms",
      [
        {
          number: "101",
          roomTypeId: 1,
          comfortLevelId: 1,
          status: "Available",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          number: "102",
          roomTypeId: 2,
          comfortLevelId: 2,
          status: "Occupied",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Rooms", null, {});
  },
};
