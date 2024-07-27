"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "RoomPackages",
      [
        {
          roomId: 1,
          packageId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          roomId: 2,
          packageId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("RoomPackages", null, {});
  },
};
