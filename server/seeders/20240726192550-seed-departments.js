"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Departments",
      [
        // Front Office Department and Sections
        {
          id: 1,
          parent: null,
          description: "Front Office",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          parent: 1,
          description: "Reception/Front Desk",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          parent: 1,
          description: "Concierge",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 4,
          parent: 1,
          description: "Guest Services",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // Housekeeping Department and Sections
        {
          id: 5,
          parent: null,
          description: "Housekeeping",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 6,
          parent: 5,
          description: "Room Cleaning",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 7,
          parent: 5,
          description: "Laundry",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 8,
          parent: 5,
          description: "Public Area Cleaning",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // Food and Beverage Department and Sections
        {
          id: 9,
          parent: null,
          description: "Food and Beverage",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 10,
          parent: 9,
          description: "Restaurants and Dining",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 11,
          parent: 9,
          description: "Banquets and Events",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 12,
          parent: 9,
          description: "Bars and Lounges",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 13,
          parent: 9,
          description: "Room Service",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // Kitchen/Culinary Department and Sections
        {
          id: 14,
          parent: null,
          description: "Kitchen/Culinary",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 15,
          parent: 14,
          description: "Executive Chef",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 16,
          parent: 14,
          description: "Sous Chef and Line Cooks",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 17,
          parent: 14,
          description: "Pastry and Bakery",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // Sales and Marketing Department and Sections
        {
          id: 18,
          parent: null,
          description: "Sales and Marketing",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 19,
          parent: 18,
          description: "Sales Team",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 20,
          parent: 18,
          description: "Marketing",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 21,
          parent: 18,
          description: "Revenue Management",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // Human Resources Department and Sections
        {
          id: 22,
          parent: null,
          description: "Human Resources",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 23,
          parent: 22,
          description: "Recruitment and Hiring",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 24,
          parent: 22,
          description: "Training and Development",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 25,
          parent: 22,
          description: "Employee Relations",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // Finance and Accounting Department and Sections
        {
          id: 26,
          parent: null,
          description: "Finance and Accounting",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 27,
          parent: 26,
          description: "Budgeting and Forecasting",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 28,
          parent: 26,
          description: "Accounts Payable and Receivable",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 29,
          parent: 26,
          description: "Payroll",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // Maintenance and Engineering Department and Sections
        {
          id: 30,
          parent: null,
          description: "Maintenance and Engineering",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 31,
          parent: 30,
          description: "Facility Maintenance",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 32,
          parent: 30,
          description: "Energy Management",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 33,
          parent: 30,
          description: "Safety and Security",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // Information Technology Department and Sections
        {
          id: 34,
          parent: null,
          description: "Information Technology",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 35,
          parent: 34,
          description: "IT Support",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 36,
          parent: 34,
          description: "Software Management",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // Spa and Recreation Department and Sections
        {
          id: 37,
          parent: null,
          description: "Spa and Recreation",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 38,
          parent: 37,
          description: "Spa Services",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 39,
          parent: 37,
          description: "Fitness Center",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 40,
          parent: 37,
          description: "Recreational Activities",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.bulkDelete("Departments", null, {});
  },
};
