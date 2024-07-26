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
      "RoleResponsibilities",
      [
        // General Manager
        {
          roleId: 1,
          responsibility: "Overall management of the hotel",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          roleId: 1,
          responsibility: "Strategic planning and ensuring profitability",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          roleId: 1,
          responsibility: "Overseeing all departments",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          roleId: 1,
          responsibility: "Maintaining guest satisfaction",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // Front Office Manager
        {
          roleId: 2,
          responsibility: "Managing the front desk",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          roleId: 2,
          responsibility: "Supervising check-in/check-out processes",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          roleId: 2,
          responsibility: "Handling guest inquiries and complaints",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          roleId: 2,
          responsibility: "Ensuring efficient guest services",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // Receptionist
        {
          roleId: 3,
          responsibility: "Greeting guests",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          roleId: 3,
          responsibility: "Processing check-ins and check-outs",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          roleId: 3,
          responsibility: "Managing reservations",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          roleId: 3,
          responsibility: "Answering phone calls",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          roleId: 3,
          responsibility:
            "Providing information about the hotel and local area",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // Concierge
        {
          roleId: 4,
          responsibility: "Assisting guests with special requests",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          roleId: 4,
          responsibility: "Making reservations for dining and entertainment",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          roleId: 4,
          responsibility: "Arranging transportation",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          roleId: 4,
          responsibility: "Providing local information and recommendations",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // Reservations Manager
        {
          roleId: 5,
          responsibility: "Managing room bookings",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          roleId: 5,
          responsibility: "Coordinating with travel agents",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          roleId: 5,
          responsibility: "Handling cancellations and modifications",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          roleId: 5,
          responsibility: "Optimizing room occupancy rates",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // Housekeeping Manager
        {
          roleId: 6,
          responsibility: "Overseeing housekeeping staff",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          roleId: 6,
          responsibility:
            "Ensuring cleanliness and maintenance of rooms and public areas",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          roleId: 6,
          responsibility: "Managing inventory of cleaning supplies",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          roleId: 6,
          responsibility: "Coordinating laundry services",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // Housekeeping Staff
        {
          roleId: 7,
          responsibility: "Cleaning guest rooms and public areas",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          roleId: 7,
          responsibility: "Replenishing amenities",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          roleId: 7,
          responsibility: "Reporting maintenance issues",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          roleId: 7,
          responsibility: "Ensuring high standards of cleanliness",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // Food and Beverage Manager
        {
          roleId: 8,
          responsibility: "Managing restaurants, bars, and room service",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          roleId: 8,
          responsibility: "Ensuring quality food and service",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          roleId: 8,
          responsibility: "Coordinating with chefs and kitchen staff",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          roleId: 8,
          responsibility: "Overseeing event catering",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // Chefs and Kitchen Staff
        {
          roleId: 9,
          responsibility: "Preparing meals",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          roleId: 9,
          responsibility: "Managing kitchen operations",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          roleId: 9,
          responsibility: "Maintaining food safety standards",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          roleId: 9,
          responsibility: "Creating menus",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // Waitstaff
        {
          roleId: 10,
          responsibility: "Serving food and beverages to guests",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          roleId: 10,
          responsibility: "Taking orders",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          roleId: 10,
          responsibility: "Providing recommendations",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          roleId: 10,
          responsibility: "Ensuring guest satisfaction in dining areas",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // Banquet Manager
        {
          roleId: 11,
          responsibility: "Coordinating and managing events and functions",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          roleId: 11,
          responsibility: "Liaising with clients",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          roleId: 11,
          responsibility: "Overseeing setup and service",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          roleId: 11,
          responsibility: "Ensuring successful execution of events",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // Maintenance Manager
        {
          roleId: 12,
          responsibility: "Overseeing maintenance and repair work",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          roleId: 12,
          responsibility: "Managing maintenance staff",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          roleId: 12,
          responsibility:
            "Ensuring the safety and functionality of hotel facilities",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          roleId: 12,
          responsibility: "Handling emergencies",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // Maintenance Staff
        {
          roleId: 13,
          responsibility: "Performing routine maintenance tasks",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          roleId: 13,
          responsibility: "Addressing repair requests",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          roleId: 13,
          responsibility: "Maintaining HVAC, plumbing, and electrical systems",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          roleId: 13,
          responsibility: "Ensuring safety compliance",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // Human Resources Manager
        {
          roleId: 14,
          responsibility: "Recruiting, training, and managing staff",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          roleId: 14,
          responsibility: "Handling employee relations",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          roleId: 14,
          responsibility: "Ensuring compliance with labor laws",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          roleId: 14,
          responsibility: "Overseeing payroll and benefits",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // Sales and Marketing Manager
        {
          roleId: 15,
          responsibility: "Developing marketing strategies",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          roleId: 15,
          responsibility: "Managing sales campaigns",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          roleId: 15,
          responsibility: "Promoting the hotel",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          roleId: 15,
          responsibility: "Maintaining relationships with clients",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          roleId: 15,
          responsibility: "Increasing revenue through various channels",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // IT Manager
        {
          roleId: 16,
          responsibility: "Managing hotel technology infrastructure",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          roleId: 16,
          responsibility: "Ensuring network and data security",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          roleId: 16,
          responsibility: "Maintaining hotel management systems",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          roleId: 16,
          responsibility: "Providing technical support to staff",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // Security Manager
        {
          roleId: 17,
          responsibility:
            "Ensuring the safety and security of guests and staff",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          roleId: 17,
          responsibility: "Monitoring surveillance systems",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          roleId: 17,
          responsibility: "Managing security personnel",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          roleId: 17,
          responsibility: "Implementing safety protocols",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // Valet
        {
          roleId: 18,
          responsibility: "Assisting guests with parking",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          roleId: 18,
          responsibility: "Retrieving vehicles",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          roleId: 18,
          responsibility: "Managing the parking area",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          roleId: 18,
          responsibility: "Providing courteous service",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // Spa and Wellness Staff
        {
          roleId: 19,
          responsibility: "Providing spa treatments",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          roleId: 19,
          responsibility: "Managing fitness and wellness programs",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          roleId: 19,
          responsibility: "Ensuring a relaxing environment",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          roleId: 19,
          responsibility: "Maintaining spa facilities",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // Event Coordinator
        {
          roleId: 20,
          responsibility: "Planning and coordinating events",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          roleId: 20,
          responsibility: "Liaising with clients and vendors",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          roleId: 20,
          responsibility: "Managing event logistics",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          roleId: 20,
          responsibility: "Ensuring successful execution of events",
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
