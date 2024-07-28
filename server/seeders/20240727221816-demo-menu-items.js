"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.bulkInsert(
      "MenuItems",
      [
        {
          name: "Spaghetti Bolognese",
          description: "Delicious spaghetti with meat sauce",
          price: 12.99,
          departmentId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Grilled Chicken Salad",
          description: "Fresh salad with grilled chicken",
          price: 10.99,
          departmentId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Margarita",
          description: "Classic margarita cocktail",
          price: 8.99,
          departmentId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Mojito",
          description: "Refreshing mojito cocktail",
          price: 9.99,
          departmentId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("MenuItems", null, {});
  },
};
