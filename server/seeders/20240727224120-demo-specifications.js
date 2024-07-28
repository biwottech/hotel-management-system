"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.bulkInsert(
      "Specifications",
      [
        { name: "Cold", createdAt: new Date(), updatedAt: new Date() },
        { name: "Hot", createdAt: new Date(), updatedAt: new Date() },
        { name: "Warm", createdAt: new Date(), updatedAt: new Date() },
        { name: "With Sugar", createdAt: new Date(), updatedAt: new Date() },
        { name: "No Sugar", createdAt: new Date(), updatedAt: new Date() },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Specifications", null, {});
  },
};
