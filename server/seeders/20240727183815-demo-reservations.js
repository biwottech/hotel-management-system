"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Reservations",
      [
        {
          guestId: 1,
          roomId: 1,
          checkInDate: new Date(),
          checkOutDate: new Date(),
          status: "Confirmed",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Reservations", null, {});
  },
};
