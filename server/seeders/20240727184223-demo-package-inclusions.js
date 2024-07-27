"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "PackageInclusions",
      [
        {
          packageId: 1,
          inclusion: "Breakfast",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          packageId: 2,
          inclusion: "All meals and drinks",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("PackageInclusions", null, {});
  },
};
