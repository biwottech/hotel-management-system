"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.bulkInsert(
      "ServiceCategories",
      [
        {
          name: "Accommodation Services",
          description: "Services related to room accommodation",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Dining and Beverage Services",
          description: "Services related to dining and beverages",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Guest Services",
          description: "General guest services",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Recreational Services",
          description: "Recreational and leisure services",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Business Services",
          description: "Services for business guests",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Technology Services",
          description: "Technology-related services",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Transportation Services",
          description: "Services related to transportation",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Family and Child Services",
          description: "Services for families and children",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Health and Safety Services",
          description: "Health and safety services",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Additional Services",
          description: "Other additional services",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("ServiceCategories", null, {});
  },
};
