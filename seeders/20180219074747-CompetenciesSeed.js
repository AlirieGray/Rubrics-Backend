'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Competencies', [
              { name: "HTML and Templating",  rubricId: 10000, createdAt: new Date(), updatedAt: new Date(), id: 10000 },
              { name: "CSS",  rubricId: 10000, createdAt: new Date(), updatedAt: new Date(), id: 10001 },
              { name: "Client-Side Javascript",  rubricId: 10000, createdAt: new Date(), updatedAt: new Date(), id: 10002 },
              { name: "Backend Skills",  rubricId: 10000, createdAt: new Date(), updatedAt: new Date(), id: 10003 },
              { name: "DevOps and Security",  rubricId: 10000, createdAt: new Date(), updatedAt: new Date(), id: 10004 },
              { name: "Testing and Debugging",  rubricId: 10000, createdAt: new Date(), updatedAt: new Date(), id: 10005 },
              { name: "Databases - SQL and NoSQL",  rubricId: 10000, createdAt: new Date(), updatedAt: new Date(), id: 10006 },

              { name: "Swift",  rubricId: 10001, createdAt: new Date(), updatedAt: new Date(), id: 10007 },
              { name: "XCode",  rubricId: 10001, createdAt: new Date(), updatedAt: new Date(), id: 10008 },
              { name: "iOS Frontend",  rubricId: 10001, createdAt: new Date(), updatedAt: new Date(), id: 10009 },
              { name: "iOS System",  rubricId: 10001, createdAt: new Date(), updatedAt: new Date(), id: 10010 },
              { name: "Backend Skills",  rubricId: 10001, createdAt: new Date(), updatedAt: new Date(), id: 10011 },
              { name: "DevOps & Security",  rubricId: 10001, createdAt: new Date(), updatedAt: new Date(), id: 10012 },
              { name: "Testing",  rubricId: 10001, createdAt: new Date(), updatedAt: new Date(), id: 10013 },
              { name: "SQL & Databases",  rubricId: 10001, createdAt: new Date(), updatedAt: new Date(), id: 10014 },

              { name: "Portfolio",  rubricId: 10002, createdAt: new Date(), updatedAt: new Date(), id: 10015 },
              { name: "Project Planning",  rubricId: 10002, createdAt: new Date(), updatedAt: new Date(), id: 10016 },
              { name: "Code Work Ethic",  rubricId: 10002, createdAt: new Date(), updatedAt: new Date(), id: 10017 },
              { name: "Code Craft & Quality",  rubricId: 10002, createdAt: new Date(), updatedAt: new Date(), id: 10018 },
              { name: "Architecture & Paradigms",  rubricId: 10002, createdAt: new Date(), updatedAt: new Date(), id: 10019 },
              { name: "Timely and Clear Communication",  rubricId: 10002, createdAt: new Date(), updatedAt: new Date(), id: 10020 },
              { name: "Professionalism and Maturity",  rubricId: 10002, createdAt: new Date(), updatedAt: new Date(), id: 10021 },
              { name: "Mentorship, Casual Interviews, Coffees, and Contacts",  rubricId: 10002, createdAt: new Date(), updatedAt: new Date(), id: 10022 },
              { name: "Teamwork & Leadership",  rubricId: 10002, createdAt: new Date(), updatedAt: new Date(), id: 10023 },
              { name: "Technical Discussion Interview",  rubricId: 10002, createdAt: new Date(), updatedAt: new Date(), id: 10024 },
              { name: "Algorithms and Data Structures",  rubricId: 10002, createdAt: new Date(), updatedAt: new Date(), id: 10025 },
              { name: "Technical Interviewing & Live Coding",  rubricId: 10002, createdAt: new Date(), updatedAt: new Date(), id: 10026 },
              { name: "Resume, Cover Letter, LinkedIn, & GitHub",  rubricId: 10002, createdAt: new Date(), updatedAt: new Date(), id: 10027 },
              { name: "Behavioral Inteviewing",  rubricId: 10002, createdAt: new Date(), updatedAt: new Date(), id: 10028 },
          ], {});
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Competencies', null, {});

    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
