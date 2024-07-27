"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      "Employees",
      [
        {
          firstName: "John",
          lastName: "Doe",
          email: "john.doe@example.com",
          phone: "1234567890",
          departmentId: 1,
          sectionId: 1,
          roleId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Jane",
          lastName: "Doe",
          email: "jane.doe@example.com",
          phone: "0987654321",
          departmentId: 2,
          sectionId: 2,
          roleId: 2,
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
