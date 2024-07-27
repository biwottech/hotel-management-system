"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Services",
      [
        {
          name: "Room Service",
          description: "Delivery of food and beverages to guest rooms",
          serviceCategoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Housekeeping",
          description: "Cleaning and maintenance of guest rooms",
          serviceCategoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Laundry Service",
          description:
            "Washing, drying, ironing, and folding of clothes and linens",
          serviceCategoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Turndown Service",
          description: "Evening room preparation, including bed arrangement",
          serviceCategoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Restaurants",
          description: "On-site dining options offering various cuisines",
          serviceCategoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Bars and Lounges",
          description:
            "Beverage services including alcoholic and non-alcoholic drinks",
          serviceCategoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Concierge Service",
          description:
            "Assistance with reservations, tickets, and local information",
          serviceCategoryId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Spa Services",
          description: "Massages, facials, and other wellness treatments",
          serviceCategoryId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Fitness Center",
          description: "Gym facilities and fitness classes",
          serviceCategoryId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Meeting Rooms",
          description: "Facilities for meetings and conferences",
          serviceCategoryId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Services", null, {});
  },
};
