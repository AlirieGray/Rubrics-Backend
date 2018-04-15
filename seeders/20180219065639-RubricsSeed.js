'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Rubrics', [
              { name: "Full Stack Web Skills", description: "Make School's rubric for assessing competencies and getting a job as a professional in full stack web", userId: 10000, createdAt: new Date(), updatedAt: new Date(), id: 10000 },
              { name: "Full Stack Mobile Skills", description: "Make School's rubric for assessing competencies and getting a job as a professional in full stack web", userId: 10000, createdAt: new Date(), updatedAt: new Date(), id: 10001 },
              { name: "Internship/Job Readiness", description: "Make School's rubric for assessing competencies and readiness for getting a job/internship", userId: 10000, createdAt: new Date(), updatedAt: new Date(), id: 10003 },
              { name: "Course Performance", description: "Make School's rubric for assessing course performance in any course", userId: 10000, createdAt: new Date(), updatedAt: new Date(), id: 10003 },
              { name: "Code Review Rubric", description: "Make School's rubric for assessing code quality and organization", userId: 10000, createdAt: new Date(), updatedAt: new Date(), id: 10004 },
              { name: "Technical Interview for Junior Software Engineer", description: "Make School's rubric for assessing competencies technical interviewing and whiteboarding", userId: 10000, createdAt: new Date(), updatedAt: new Date(), id: 10005 },
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

    return queryInterface.bulkDelete('Rubrics', null, {});

    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
