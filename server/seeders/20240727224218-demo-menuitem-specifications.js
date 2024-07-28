"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.bulkInsert(
      "MenuItemSpecifications",
      [
        {
          menuItemId: 3,
          specificationId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        }, // Margarita: Cold
        {
          menuItemId: 3,
          specificationId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        }, // Margarita: Hot
        {
          menuItemId: 3,
          specificationId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        }, // Margarita: Warm
        {
          menuItemId: 3,
          specificationId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        }, // Margarita: With Sugar
        {
          menuItemId: 3,
          specificationId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        }, // Margarita: No Sugar
        // Add other menu item specifications as needed
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("MenuItemSpecifications", null, {});
  },
};
