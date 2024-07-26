"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    return await queryInterface.bulkInsert(
      "Roles",
      [
        {
          name: "General Manager",
          description: "Overall management of the hotel",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Front Office Manager",
          description: "Managing the front desk and guest services",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Receptionist",
          description:
            "Greeting guests and processing check-ins and check-outs",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Concierge",
          description:
            "Assisting guests with special requests and reservations",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Reservations Manager",
          description: "Managing room bookings and optimizing occupancy rates",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Housekeeping Manager",
          description: "Overseeing housekeeping staff and ensuring cleanliness",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Housekeeping Staff",
          description: "Cleaning guest rooms and public areas",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Food and Beverage Manager",
          description: "Managing restaurants, bars, and room service",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Chefs and Kitchen Staff",
          description: "Preparing meals and managing kitchen operations",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Waitstaff",
          description: "Serving food and beverages to guests",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Banquet Manager",
          description: "Coordinating and managing events and functions",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Maintenance Manager",
          description: "Overseeing maintenance and repair work",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Maintenance Staff",
          description: "Performing routine maintenance tasks",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Human Resources Manager",
          description: "Recruiting, training, and managing staff",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Sales and Marketing Manager",
          description:
            "Developing marketing strategies and managing sales campaigns",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "IT Manager",
          description: "Managing hotel technology infrastructure",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Security Manager",
          description: "Ensuring the safety and security of guests and staff",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Valet",
          description: "Assisting guests with parking",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Spa and Wellness Staff",
          description:
            "Providing spa treatments and managing wellness programs",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Event Coordinator",
          description: "Planning and coordinating events",
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
