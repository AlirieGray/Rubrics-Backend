'use strict';
var ogs = require('open-graph-scraper')

module.exports = {
  up: (queryInterface, Sequelize) => {

    const learningActions = [
      { userId: 10003, customTitle: "HTML Boilerplate", url: "https://github.com/h5bp/html5-boilerplate/blob/master/src/index.html" , criterionId: 10000, createdAt: new Date(), updatedAt: new Date(), id: 10000 },
      { userId: 10003, customTitle: "", url: "https://www.w3schools.com/html/html_basic.asp" , criterionId: 10001, createdAt: new Date(), updatedAt: new Date(), id: 10001 },
      { userId: 10003, customTitle: "", url: "https://www.w3schools.com/html/html_elements.asp" , criterionId: 10001, createdAt: new Date(), updatedAt: new Date(), id: 10002 },
      { userId: 10003, customTitle: "", url: "https://www.youtube.com/watch?v=UB1O30fR-EE" , criterionId: 10001, createdAt: new Date(), updatedAt: new Date(), id: 10003 },
      { userId: 10003, customTitle: "HTML Tags Memorization", url: "https://www.youtube.com/watch?v=QZXDAGwD8Ng" , criterionId: 10002, createdAt: new Date(), updatedAt: new Date(), id: 10004 },
      { userId: 10003, customTitle: "", url: "https://www.impressivewebs.com/w3schools-ugly-bad-good/" , criterionId: 10002, createdAt: new Date(), updatedAt: new Date(), id: 10005 },
      { userId: 10003, customTitle: "", url: "https://en.wikipedia.org/wiki/Semantic_HTML" , criterionId: 10003, createdAt: new Date(), updatedAt: new Date(), id: 10006 },
      { userId: 10003, customTitle: "", url: "https://internetingishard.com/html-and-css/semantic-html/" , criterionId: 10003, createdAt: new Date(), updatedAt: new Date(), id: 10007 },
      { userId: 10003, customTitle: "", url: "https://www.lifewire.com/why-use-semantic-html-3468271" , criterionId: 10003, createdAt: new Date(), updatedAt: new Date(), id: 10008 },
      { userId: 10003, customTitle: "", url: "https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/html-indent.md" , criterionId: 10004, createdAt: new Date(), updatedAt: new Date(), id: 10009 },
      { userId: 10003, customTitle: "Node.js + Express - Tutorial - Handlebars Templating Engine", url: "https://www.youtube.com/watch?v=1srD3Mdvf50" , criterionId: 10005, createdAt: new Date(), updatedAt: new Date(), id: 10010 },
      { userId: 10003, customTitle: "", url: "https://colorlib.com/wp/top-templating-engines-for-javascript/" , criterionId: 10005, createdAt: new Date(), updatedAt: new Date(), id: 10011 },
      { userId: 10003, customTitle: "", url: "https://colorlib.com/wp/top-templating-engines-for-javascript/" , criterionId: 10006, createdAt: new Date(), updatedAt: new Date(), id: 10012 },
      { userId: 10003, customTitle: "", url: "" , criterionId: 10007, createdAt: new Date(), updatedAt: new Date(), id: 10013 },
      { userId: 10003, customTitle: "", url: "https://www.youtube.com/watch?v=fe6OzNyDToY" , criterionId: 10008, createdAt: new Date(), updatedAt: new Date(), id: 10014 },
      { userId: 10003, customTitle: "", url: "https://stackoverflow.com/questions/1533568/what-is-the-correct-way-to-write-html-using-javascript?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa" , criterionId: 10009, createdAt: new Date(), updatedAt: new Date(), id: 10015 },
      { userId: 10003, customTitle: "", url: "https://www.w3schools.com/cssref/css_selectors.asp" , criterionId: 10010, createdAt: new Date(), updatedAt: new Date(), id: 10016 },
      { userId: 10003, customTitle: "", url: "https://www.youtube.com/watch?v=qc9jgsClEJs" , criterionId: 10011, createdAt: new Date(), updatedAt: new Date(), id: 10017 },
      { userId: 10003, customTitle: "", url: "https://css-tricks.com/useful-nth-child-recipies/" , criterionId: 10012, createdAt: new Date(), updatedAt: new Date(), id: 10018 },
      { userId: 10003, customTitle: "", url: "https://www.w3schools.com/cssref/css3_pr_align-content.asp" , criterionId: 10013, createdAt: new Date(), updatedAt: new Date(), id: 10019 },
      { userId: 10003, customTitle: "", url: "http://www.htmldog.com/references/css/properties/" , criterionId: 10014, createdAt: new Date(), updatedAt: new Date(), id: 10020 },
      { userId: 10003, customTitle: "", url: "https://getbootstrap.com/docs/3.3/css/" , criterionId: 10015, createdAt: new Date(), updatedAt: new Date(), id: 10021 },
      { userId: 10003, customTitle: "", url: "https://www.ostraining.com/blog/coding/bootstrap-right-way/" , criterionId: 10016, createdAt: new Date(), updatedAt: new Date(), id: 10022 },
      { userId: 10003, customTitle: "", url: "https://www.webdesignerdepot.com/2013/07/how-to-modify-bootstrap-simply-and-effectively/" , criterionId: 10017, createdAt: new Date(), updatedAt: new Date(), id: 10023 },
      { userId: 10003, customTitle: "", url: "https://www.quora.com/How-do-you-make-a-web-page-responsive-without-Bootstrap-using-only-HTML-and-CSS" , criterionId: 10018, createdAt: new Date(), updatedAt: new Date(), id: 10024 },
      { userId: 10003, customTitle: "", url: "https://www.w3schools.com/css/css3_flexbox.asp" , criterionId: 10019, createdAt: new Date(), updatedAt: new Date(), id: 10025 },
      { userId: 10003, customTitle: "", url: "https://www.w3schools.com/css/css_rwd_mediaqueries.asp" , criterionId: 10020, createdAt: new Date(), updatedAt: new Date(), id: 10026 },
      { userId: 10003, customTitle: "", url: "http://www.htmldog.com/guides/css/advanced/" , criterionId: 10021, createdAt: new Date(), updatedAt: new Date(), id: 10027 },
      { userId: 10003, customTitle: "", url: "http://www.htmldog.com/guides/css/advanced/transitions/" , criterionId: 10022, createdAt: new Date(), updatedAt: new Date(), id: 10028 },
      { userId: 10003, customTitle: "", url: "https://css-tricks.com/" , criterionId: 10022, createdAt: new Date(), updatedAt: new Date(), id: 10029 },
      { userId: 10003, customTitle: "", url: "https://css-tricks.com/snippets/" , criterionId: 10022, createdAt: new Date(), updatedAt: new Date(), id: 10030 },
      { userId: 10003, customTitle: "", url: "https://css-tricks.com/video-screencasts/" , criterionId: 10023, createdAt: new Date(), updatedAt: new Date(), id: 10031 },
      { userId: 10003, customTitle: "", url: "http://sass-lang.com/" , criterionId: 10023, createdAt: new Date(), updatedAt: new Date(), id: 10032 },
      { userId: 10003, customTitle: "", url: "https://www.youtube.com/watch?v=PRJpf-yyWZ4" , criterionId: 10023, createdAt: new Date(), updatedAt: new Date(), id: 10033 },
      { userId: 10003, customTitle: "", url: "https://www.youtube.com/watch?v=wz3kElLbEHE" , criterionId: 10023, createdAt: new Date(), updatedAt: new Date(), id: 10034 },
      { userId: 10003, customTitle: "", url: "https://www.w3schools.com/jquery/default.asp", criterionId: 10024, createdAt: new Date(), updatedAt: new Date(), id: 10035 },
      { userId: 10003, customTitle: "", url: "https://www.w3schools.com/html/html_scripts.asp" , criterionId: 10024, createdAt: new Date(), updatedAt: new Date(), id: 10036 },
    ];

    var allLearningActions = [];

    let allProcess = Promise.all(learningActions.map((action) => {
      return new Promise((resolve) => {
        var options = {'url': action.url};
        ogs(options, (error, results) => {
          if (error) {
            console.log('Open Graph Error:', results.error) // This is returns true or false. True if there was a error. The error it self is inside the results object.
          } else {
            console.log('Open Graph Call Successful...')
          }
          const newAction = { ...action, meta: results.success ? JSON.stringify(results.data) : JSON.stringify({ error: results }) }
          allLearningActions.push(newAction);
          return resolve(action);
        });
      });
    })).then(() => {
      const config =  {
        logging: console.log,
        seederStorage: "sequelize"
      };
      return queryInterface.bulkInsert('Actions', allLearningActions, config);
    });

    return allProcess;


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

  return queryInterface.bulkDelete('Actions', null, {});

  /*
  Add reverting commands here.
  Return a promise to correctly handle asynchronicity.

  Example:
  return queryInterface.bulkDelete('Person', null, {});
  */
}
};