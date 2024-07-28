"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "PackageInclusions",
      [
        {
          packageId: 1,
          serviceId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          packageId: 1,
          serviceId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          packageId: 2,
          serviceId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          packageId: 2,
          serviceId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          packageId: 2,
          serviceId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          packageId: 2,
          serviceId: 4,
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
