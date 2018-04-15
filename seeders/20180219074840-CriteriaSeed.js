'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Criteria', [
              { text: "Can write the basic HTML boilerplate from memory",  level: 1, scaleId: 10000, createdAt: new Date(), updatedAt: new Date(), id: 10000 },
              { text: "Needs to look up tags occasionally from documentation",  level: 1, scaleId: 10001, createdAt: new Date(), updatedAt: new Date(), id: 10001 },
              { text: "Can write basic and advanced HTML tags from memory",  level: 2, scaleId: 10001, createdAt: new Date(), updatedAt: new Date(), id: 10002 },
              { text: "Uses HTML tags semantically, e.g. uses structural tags (section, header, footer, article, etc.)",  level: 3, scaleId: 10001, createdAt: new Date(), updatedAt: new Date(), id: 10003 },
              { text: "Indentation is flawless",  level: 2, scaleId: 10002, createdAt: new Date(), updatedAt: new Date(), id: 10004 },
              { text: "Has experience with one templating engine",  level: 2, scaleId: 10003, createdAt: new Date(), updatedAt: new Date(), id: 10005 },
              { text: "Has experience with a few templating engines",  level: 3, scaleId: 10003, createdAt: new Date(), updatedAt: new Date(), id: 10006 },
              { text: "Has experience and expertise with multiple templating engines",  level: 4, scaleId: 10003, createdAt: new Date(), updatedAt: new Date(), id: 10007 },
              { text: "Can use advanced HTML tags such as meta tags, title tags, and optimize page load time",  level: 3, scaleId: 10004, createdAt: new Date(), updatedAt: new Date(), id: 10008 },
              { text: "Has manipulated and written HTML programmatically",  level: 4, scaleId: 10005, createdAt: new Date(), updatedAt: new Date(), id: 10009 },

              { text: "Can use basic selectors like class and id",  level: 1, scaleId: 10006, createdAt: new Date(), updatedAt: new Date(), id: 10010 },
              { text: "Knows all major CSS selectors",  level: 2, scaleId: 10006, createdAt: new Date(), updatedAt: new Date(), id: 10011 },
              { text: "Understands advanced selectors like nth-child(), and ::before and can see where to apply them when needed",  level: 3, scaleId: 10006, createdAt: new Date(), updatedAt: new Date(), id: 10012 },
              { text: "Can use all basic properties and styles",  level: 1, scaleId: 10007, createdAt: new Date(), updatedAt: new Date(), id: 10013 },
              { text: "Remembers the simplest CSS attributes and has to look up advanced ones",  level: 1, scaleId: 10008, createdAt: new Date(), updatedAt: new Date(), id: 10014 },
              { text: "Can add Bootstrap and use responsive Grid, Navbar, and typography helpers",  level: 1, scaleId: 10009, createdAt: new Date(), updatedAt: new Date(), id: 10015 },
              { text: "Can apply Bootstrap/use the conventional styles to make conventionally looking web pages",  level: 2, scaleId: 10009, createdAt: new Date(), updatedAt: new Date(), id: 10016 },
              { text: "Can modify frameworks and bend them easily to your will",  level: 3, scaleId: 10009, createdAt: new Date(), updatedAt: new Date(), id: 10017 },
              { text: "Can style pages without a framework like Bootstrap",  level: 4, scaleId: 10009, createdAt: new Date(), updatedAt: new Date(), id: 10018 },
              { text: "Has mastered Float and Flexbox",  level: 2, scaleId: 10010, createdAt: new Date(), updatedAt: new Date(), id: 10019 },
              { text: "Pages are all mobile responsive",  level: 2, scaleId: 10011, createdAt: new Date(), updatedAt: new Date(), id: 10020 },
              { text: "Can apply advanced CSS3",  level: 3, scaleId: 10012, createdAt: new Date(), updatedAt: new Date(), id: 10021 },
              { text: "Can employ advanced features of CSS3 in surprising and creative ways",  level: 4, scaleId: 10013, createdAt: new Date(), updatedAt: new Date(), id: 10022 },
              { text: "Is familiar with advanced CSS build systems and scripting, e.g. Sass and Compass",  level: 4, scaleId: 10014, createdAt: new Date(), updatedAt: new Date(), id: 10023 },

              { text: "Can use simple JS or jQuery to manipulate the DOM to make sites interactive",  level: 1, scaleId: 10015, createdAt: new Date(), updatedAt: new Date(), id: 10024 },
              { text: "Can use jQuery and vanilla JavaScript to make AJAX requests load and manipulate JSON data from web APIs",  level: 2, scaleId: 10015, createdAt: new Date(), updatedAt: new Date(), id: 10025 },
              { text: "Can define variables and functions and use basic control flow",  level: 1, scaleId: 10016, createdAt: new Date(), updatedAt: new Date(), id: 10026 },
              { text: "Can write Object-Oriented JavaScript",  level: 2, scaleId: 10016, createdAt: new Date(), updatedAt: new Date(), id: 10027 },
              { text: "Can explain and utilize protypical inheritance",  level: 3, scaleId: 10016, createdAt: new Date(), updatedAt: new Date(), id: 10028 },
              { text: "Has used functional JavaScript",  level: 4, scaleId: 10016, createdAt: new Date(), updatedAt: new Date(), id: 10029 },
              { text: "Can include and use external front end libraries",  level: 1, scaleId: 10017, createdAt: new Date(), updatedAt: new Date(), id: 10030 },
              { text: "Has utilized cutting edge JavaScript projects (e.g., Universal JavaScript, Electron, Phonegap, React Native, Johnny5, etc.)",  level: 3, scaleId: 10017, createdAt: new Date(), updatedAt: new Date(), id: 10031 },
              { text: "Has published their own frameworks, libraries, or npm modules",  level: 4, scaleId: 10017, createdAt: new Date(), updatedAt: new Date(), id: 10032 },
              { text: "Can debug client-side js in the console",  level: 1, scaleId: 10018, createdAt: new Date(), updatedAt: new Date(), id: 10033 },
              { text: "Have all of the array methods in your toolbelt",  level: 2, scaleId: 10019, createdAt: new Date(), updatedAt: new Date(), id: 10034 },
              { text: "Understand the Math object",  level: 2, scaleId: 10020, createdAt: new Date(), updatedAt: new Date(), id: 10035 },
              { text: "Know the difference between setInterval and setTimeout",  level: 2, scaleId: 10021, createdAt: new Date(), updatedAt: new Date(), id: 10036 },
              { text: "Can use bower or another simple build system to manage front end packages",  level: 2, scaleId: 10022, createdAt: new Date(), updatedAt: new Date(), id: 10037 },
              { text: "Can use advanced build systems such as gulp, grunt, webpack, npm, etc. to manage front end packages",  level: 3, scaleId: 10022, createdAt: new Date(), updatedAt: new Date(), id: 10038 },
              { text: "Is familiar with the key differences with ES6 and ES5",  level: 3, scaleId: 10023, createdAt: new Date(), updatedAt: new Date(), id: 10039 },
              { text: "Is very comfortable with ES6 and also familiar with JS alternatives (e.g., JSX, Typescript, etc.)",  level: 4, scaleId: 10023, createdAt: new Date(), updatedAt: new Date(), id: 10040 },
              { text: "Can create a Single Page Application (SPA) using libraries like React.js, Angular.js, or Vue.js",  level: 3, scaleId: 10024, createdAt: new Date(), updatedAt: new Date(), id: 10041 },
              { text: "Can create SPAs with fluency using a stack of advanced front end frameworks and build systems",  level: 4, scaleId: 10024, createdAt: new Date(), updatedAt: new Date(), id: 10042 },
              { text: "Has mastered a few cutting edge JavaScript projects",  level: 4, scaleId: 10025, createdAt: new Date(), updatedAt: new Date(), id: 10043 },
              { text: "Can build a front end framework and components from scratch",  level: 4, scaleId: 10026, createdAt: new Date(), updatedAt: new Date(), id: 10044 },

              { text: "Creates a local server and define simple resource routes",  level: 1, scaleId: 10027, createdAt: new Date(), updatedAt: new Date(), id: 10045 },
              { text: "Can create a backend server that handles multiple routes using REST.  Applies RESTful routing appropriately",  level: 2, scaleId: 10027, createdAt: new Date(), updatedAt: new Date(), id: 10046 },
              { text: "Server shows quality construction and organization.  Models are well crafted.",  level: 3, scaleId: 10027, createdAt: new Date(), updatedAt: new Date(), id: 10047 },
              { text: "Can draw, explain, and utilize the MVC structure for their server",  level: 1, scaleId: 10028, createdAt: new Date(), updatedAt: new Date(), id: 10048 },
              { text: "Can make queries that join two or more resources",  level: 2, scaleId: 10029, createdAt: new Date(), updatedAt: new Date(), id: 10049 },
              { text: "Can make advanced queries that involve three or more resources",  level: 3, scaleId: 10029, createdAt: new Date(), updatedAt: new Date(), id: 10050 },
              { text: "Can use external APIs",  level: 2, scaleId: 10030, createdAt: new Date(), updatedAt: new Date(), id: 10051 },
              { text: "Can return templates or build a fully RESTful API",  level: 2, scaleId: 10031, createdAt: new Date(), updatedAt: new Date(), id: 10052 },
              { text: "Can use an authentication library, but not roll own auth",  level: 2, scaleId: 10032, createdAt: new Date(), updatedAt: new Date(), id: 10053 },
              { text: "Can roll their own authentication",  level: 3, scaleId: 10032, createdAt: new Date(), updatedAt: new Date(), id: 10054 },
              { text: "Can roll their own third party authentications",  level: 4, scaleId: 10032, createdAt: new Date(), updatedAt: new Date(), id: 10055 },
              { text: "Can scrape and parse the DOM",  level: 2, scaleId: 10033, createdAt: new Date(), updatedAt: new Date(), id: 10056 },
              { text: "Can write and use a scrape",  level: 3, scaleId: 10033, createdAt: new Date(), updatedAt: new Date(), id: 10057 },
              { text: "Uses websockets to acheive real-time user interactions",  level: 3, scaleId: 10034, createdAt: new Date(), updatedAt: new Date(), id: 10058 },
              { text: "Can use third party authentications",  level: 3, scaleId: 10035, createdAt: new Date(), updatedAt: new Date(), id: 10059 },
              { text: "Can build their own SDK with authentication",  level: 4, scaleId: 10035, createdAt: new Date(), updatedAt: new Date(), id: 10060 },
              { text: "Can use JWT for authentication",  level: 3, scaleId: 10036, createdAt: new Date(), updatedAt: new Date(), id: 10061 },
              { text: "Can connect to smart devices and other exotic APIs",  level: 4, scaleId: 10037, createdAt: new Date(), updatedAt: new Date(), id: 10062 },

              { text: "Runs projects in your local development server",  level: 1, scaleId: 10038, createdAt: new Date(), updatedAt: new Date(), id: 10063 },
              { text: "Deploys their site to a live remote server",  level: 1, scaleId: 10039, createdAt: new Date(), updatedAt: new Date(), id: 10064 },
              { text: "Encrypts passwords",  level: 1, scaleId: 10040, createdAt: new Date(), updatedAt: new Date(), id: 10065 },
              { text: "Has used server plugins e.g. for logging, emails, scheduling tasks, uptime monitoring, bug tracking, etc...",  level: 2, scaleId: 10041, createdAt: new Date(), updatedAt: new Date(), id: 10066 },
              { text: "Can encrypt and hide their keys using a dotenv library or another secure pattern",  level: 2, scaleId: 10042, createdAt: new Date(), updatedAt: new Date(), id: 10067 },
              { text: "Has implemented simple analytics, e.g. google analytics",  level: 2, scaleId: 10043, createdAt: new Date(), updatedAt: new Date(), id: 10068 },
              { text: "Has implemented some more advanced analytics, e.g. funnels, cohorts, conversion rates",  level: 3, scaleId: 10043, createdAt: new Date(), updatedAt: new Date(), id: 10069 },
              { text: "Can use more than one type of remote host, e.g. Heroku, AWS Google",  level: 3, scaleId: 10044, createdAt: new Date(), updatedAt: new Date(), id: 10070 },
              { text: "Can implement and optimize a scalable web host on various hosts",  level: 4, scaleId: 10044, createdAt: new Date(), updatedAt: new Date(), id: 10071 },
              { text: "Can make a threat matrix for their server and fix simple data leaks",  level: 3, scaleId: 10045, createdAt: new Date(), updatedAt: new Date(), id: 10072 },
              { text: "Can fix complex data leaks",  level: 4, scaleId: 10045, createdAt: new Date(), updatedAt: new Date(), id: 10073 },
              { text: "Has used continuous integration",  level: 4, scaleId: 10046, createdAt: new Date(), updatedAt: new Date(), id: 10074 },
              { text: "Has used containers",  level: 4, scaleId: 10047, createdAt: new Date(), updatedAt: new Date(), id: 10075 },
              { text: "Protects against classical attacks",  level: 4, scaleId: 10048, createdAt: new Date(), updatedAt: new Date(), id: 10076 },
              { text: "Can roll their own host using EC2 or their own load balanced server",  level: 4, scaleId: 10049, createdAt: new Date(), updatedAt: new Date(), id: 10077 },
              { text: "Logs everything, conducts advanced statistical analysis for key metrics",  level: 4, scaleId: 10050, createdAt: new Date(), updatedAt: new Date(), id: 10078 },

              { text: "Can write simple integrated/route tests",  level: 1, scaleId: 10051, createdAt: new Date(), updatedAt: new Date(), id: 10079 },
              { text: "Can write simple unit/model tests",  level: 1, scaleId: 10052, createdAt: new Date(), updatedAt: new Date(), id: 10080 },
              { text: "Has minimal test coverage (≤30%) of major projects",  level: 1, scaleId: 10053, createdAt: new Date(), updatedAt: new Date(), id: 10081 },
              { text: "Has medium test coverage (≥50%) of major projects",  level: 2, scaleId: 10053, createdAt: new Date(), updatedAt: new Date(), id: 10082 },
              { text: "Has high test coverage (≥80%) of major projects",  level: 3, scaleId: 10053, createdAt: new Date(), updatedAt: new Date(), id: 10083 },
              { text: "Is comfortable with various assertion libraries and fixtures",  level: 2, scaleId: 10054, createdAt: new Date(), updatedAt: new Date(), id: 10084 },
              { text: "Can use advanced test libraries for hard to test scenarios, e.g. spy, super-agent, assertion libraries, cheerio, etc...",  level: 3, scaleId: 10054, createdAt: new Date(), updatedAt: new Date(), id: 10085 },
              { text: "Has used advanced testing libraries to optimize their testing environment such as an auto-tester, and Travis CL",  level: 4, scaleId: 10054, createdAt: new Date(), updatedAt: new Date(), id: 10086 },
              { text: "Can test authentication routes",  level: 2, scaleId: 10055, createdAt: new Date(), updatedAt: new Date(), id: 10087 },
              { text: "Is familiar with Test Driven Development (TDD)",  level: 2, scaleId: 10056, createdAt: new Date(), updatedAt: new Date(), id: 10088 },
              { text: "Can code in TDD on demand",  level: 3, scaleId: 10056, createdAt: new Date(), updatedAt: new Date(), id: 10089 },
              { text: "Feels uncomfortable without tests",  level: 4, scaleId: 10057, createdAt: new Date(), updatedAt: new Date(), id: 10090 },

              { text: "Can use either a SQL or a NoSQL database",  level: 1, scaleId: 10058, createdAt: new Date(), updatedAt: new Date(), id: 10091 },
              { text: "Can use both SQL and NoSQL databases",  level: 2, scaleId: 10058, createdAt: new Date(), updatedAt: new Date(), id: 10092 },
              { text: "Can analyze and optimize a SQL or NoSQL database",  level: 3, scaleId: 10058, createdAt: new Date(), updatedAt: new Date(), id: 10093 },
              { text: "Can run a stack that uses both SQL and NoSQL databases to optimize reading, writing, and analytics",  level: 4, scaleId: 10058, createdAt: new Date(), updatedAt: new Date(), id: 10094 },
              { text: "Can make simple associations between resources (one-to-many)",  level: 1, scaleId: 10059, createdAt: new Date(), updatedAt: new Date(), id: 10095 },
              { text: "Can use ORM/ODM commands to interface with the database",  level: 1, scaleId: 10060, createdAt: new Date(), updatedAt: new Date(), id: 10096 },
              { text: "Can use ORM/ODM and use the command line to interact with database",  level: 2, scaleId: 10060, createdAt: new Date(), updatedAt: new Date(), id: 10097 },
              { text: "Can make and query advanced associations (many-to-many)",  level: 2, scaleId: 10061, createdAt: new Date(), updatedAt: new Date(), id: 10098 },
              { text: "Can pipe data between databases as well as create and restore backups",  level: 3, scaleId: 10062, createdAt: new Date(), updatedAt: new Date(), id: 10099 },


              { text: "The portfolio is sparse and not collected in one place <3 live, polished projects.",  level: 1, scaleId: 10063, createdAt: new Date(), updatedAt: new Date(), id: 10100 },
              { text: "The portfolio is collected in one place, either on LinkedIn or in a portfolio site or a personal website.",  level: 2, scaleId: 10063, createdAt: new Date(), updatedAt: new Date(), id: 10101 },
              { text: "The portfolio is presented in a unique and inviting personal website that displays a rich portfolio of  original projects.",  level: 3, scaleId: 10063, createdAt: new Date(), updatedAt: new Date(), id: 10102 },
              { text: "There are many projects (> 5) and a few are very creative/ sophisticated.",  level: 4, scaleId: 10064, createdAt: new Date(), updatedAt: new Date(), id: 10103 },

              { text: "Projects are just from tutorials.",  level: 1, scaleId: 10064, createdAt: new Date(), updatedAt: new Date(), id: 10104 },
              { text: "Portfolio has 3 or more live and polished projects.",  level: 2, scaleId: 10064, createdAt: new Date(), updatedAt: new Date(), id: 10105 },

              { text: "Many projects have authentication barriers to see how it works.",  level: 1, scaleId: 10065, createdAt: new Date(), updatedAt: new Date(), id: 10106 },
              { text: "Projects are easy to explore (no authentication or other barriers).",  level: 2, scaleId: 10065, createdAt: new Date(), updatedAt: new Date(), id: 10107 },

              { text: "Projects are unusable, commonly throw errors, and lack polish.",  level: 1, scaleId: 10066, createdAt: new Date(), updatedAt: new Date(), id: 10108 },
              { text: "Projects do not throw exceptions and their UX makes sense.",  level: 2, scaleId: 10065, createdAt: new Date(), updatedAt: new Date(), id: 10109 },
              { text: "Projects are navigable, and have a bit of design and uniqueness.",  level: 3, scaleId: 10065, createdAt: new Date(), updatedAt: new Date(), id: 10110 },

              { text: "It is hard to view projects' code.",  level: 1, scaleId: 10067, createdAt: new Date(), updatedAt: new Date(), id: 10111 },
              { text: "The code of projects is accessible.",  level: 2, scaleId: 10067, createdAt: new Date(), updatedAt: new Date(), id: 10112 },
              { text: "Projects' code is available and easy to find.",  level: 3, scaleId: 10067, createdAt: new Date(), updatedAt: new Date(), id: 10113 },
              { text: "Projects include a brief, or in depth, story about the idea genesis, design, development, pivots, technical challenges, and future plans for the project",  level: 4, scaleId: 10067, createdAt: new Date(), updatedAt: new Date(), id: 10114 },

              { text: "One or more projects has live users/revenue/GitHub followers and is in active development.",  level: 3, scaleId: 10068, createdAt: new Date(), updatedAt: new Date(), id: 10115 },
              { text: "A projects is of exception quality, e.g., 1k+ downloads, trending on Hacker News, GitHub, Product Hunt",  level: 4, scaleId: 10068, createdAt: new Date(), updatedAt: new Date(), id: 10116 },



              { text: "Often just jumps into coding without making any plans, backlog, milestones, or sprint planning.",  level: 1, scaleId: 10069, createdAt: new Date(), updatedAt: new Date(), id: 10117 },
              { text: "Makes a plan but doesn’t stick to it or practice good prioritization.",  level: 2, scaleId: 10069, createdAt: new Date(), updatedAt: new Date(), id: 10118 },
              { text: "Makes a plan, sticks to it, and practices good prioritization.",  level: 3, scaleId: 10069, createdAt: new Date(), updatedAt: new Date(), id: 10119 },
              { text: "Has a good plan, but can also deal with shifting priorities and resources without disrupting the project’s deadlines and quality.",  level: 4, scaleId: 10069, createdAt: new Date(), updatedAt: new Date(), id: 10120 },

              { text: "Has very little familiarity with any project planning tool.",  level: 1, scaleId: 10070, createdAt: new Date(), updatedAt: new Date(), id: 10121 },
              { text: "Has some familiarity with a project planning tool like Trello, Github Projects, Jira, Pivot Table, etc.",  level: 2, scaleId: 10070, createdAt: new Date(), updatedAt: new Date(), id: 10122 },
              { text: "Has mastery of a project planning tool.",  level: 3, scaleId: 10070, createdAt: new Date(), updatedAt: new Date(), id: 10123 },
              { text: "Has mastery of various project planning tools.",  level: 4, scaleId: 10070, createdAt: new Date(), updatedAt: new Date(), id: 10124 },

              { text: "Tries to build everything at once, not stepwise or agile.",  level: 1, scaleId: 10071, createdAt: new Date(), updatedAt: new Date(), id: 10125 },
              { text: "Can scope projects well from the beginning of the project.",  level: 2, scaleId: 10071, createdAt: new Date(), updatedAt: new Date(), id: 10126 },
              { text: "Builds code bit-by-bit and releases in a stepwise, versioned, agile fashion.",  level: 3, scaleId: 10071, createdAt: new Date(), updatedAt: new Date(), id: 10127 },

              { text: "Often over-scopes projects.",  level: 1, scaleId: 10072, createdAt: new Date(), updatedAt: new Date(), id: 10128 },
              { text: "Rarely over-scopes projects.",  level: 2, scaleId: 10072, createdAt: new Date(), updatedAt: new Date(), id: 10129 },
              { text: "Always scopes products and achieves them on intended timeline.",  level: 3, scaleId: 10072, createdAt: new Date(), updatedAt: new Date(), id: 10130 },
              { text: "Scopes well and avoids scope-creep through good communication.",  level: 4, scaleId: 10072, createdAt: new Date(), updatedAt: new Date(), id: 10131 },

              { text: "Codes the entire product without testing functionality.",  level: 1, scaleId: 10073, createdAt: new Date(), updatedAt: new Date(), id: 10132 },
              { text: "Might often write large chunks of code and incidentally inject bugs and technical debt into their code.",  level: 2, scaleId: 10073, createdAt: new Date(), updatedAt: new Date(), id: 10133 },



              { text: "Committing to github <8 times per week, <4 days per week.",  level: 1, scaleId: 10074, createdAt: new Date(), updatedAt: new Date(), id: 10134 },
              { text: "Committing to github >8 times per week, at least 4 days per week.",  level: 2, scaleId: 10074, createdAt: new Date(), updatedAt: new Date(), id: 10135 },
              { text: "Committing to github >12 times a week, 4-5 days per week.",  level: 3, scaleId: 10074, createdAt: new Date(), updatedAt: new Date(), id: 10136 },
              { text: "Pushing to github >20 times a week, and 5-6 days a week.",  level: 4, scaleId: 10074, createdAt: new Date(), updatedAt: new Date(), id: 10137 },

              { text: "Works on too many projects, or too few projects.",  level: 1, scaleId: 10075, createdAt: new Date(), updatedAt: new Date(), id: 10138 },
              { text: "Works on a good # of projects.",  level: 2, scaleId: 10075, createdAt: new Date(), updatedAt: new Date(), id: 10139 },

              { text: "Has trouble starting and/or completing projects.",  level: 1, scaleId: 10076, createdAt: new Date(), updatedAt: new Date(), id: 10140 },
              { text: "Has trouble finishing projects.",  level: 2, scaleId: 10076, createdAt: new Date(), updatedAt: new Date(), id: 10141 },
              { text: "Starts & finishes 80% of projects.",  level: 3, scaleId: 10076, createdAt: new Date(), updatedAt: new Date(), id: 10142 },

              { text: "All requests are actionable.",  level: 2, scaleId: 10077, createdAt: new Date(), updatedAt: new Date(), id: 10143 },
              { text: "Is a feedback Allstar: comes with a specific question, problem, solutions tried.",  level: 3, scaleId: 10077, createdAt: new Date(), updatedAt: new Date(), id: 10144 },

              { text: "Uses stackoverflow and other problem solving tools.",  level: 2, scaleId: 10078, createdAt: new Date(), updatedAt: new Date(), id: 10145 },
              { text: "Can use resources  to tactfully unblock themselves from any situation.",  level: 4, scaleId: 10078, createdAt: new Date(), updatedAt: new Date(), id: 10146 },

              { text: "Code naming of variables, files, resources, and functions are awkward and not semantic.",  level: 1, scaleId: 10079, createdAt: new Date(), updatedAt: new Date(), id: 10147 },
              { text: "Code naming is relatively natural and semantic.",  level: 2, scaleId: 10079, createdAt: new Date(), updatedAt: new Date(), id: 10148 },
              { text: "Variable names are natural and semantic and follow conventions.",  level: 3, scaleId: 10079, createdAt: new Date(), updatedAt: new Date(), id: 10149 },
              { text: "Can detect and follow the conventions of each code base.",  level: 4, scaleId: 10079, createdAt: new Date(), updatedAt: new Date(), id: 10150 },

              { text: "Indentation and spacing are often not correct or inconsistent.",  level: 1, scaleId: 10080, createdAt: new Date(), updatedAt: new Date(), id: 10151 },
              { text: "Indentation and spacing are correct and consistent.",  level: 2, scaleId: 10080, createdAt: new Date(), updatedAt: new Date(), id: 10152 },

              { text: "Code has comments to make the code easily readable.",  level: 3, scaleId: 10081, createdAt: new Date(), updatedAt: new Date(), id: 10153 },

              { text: "No projects contain any tests.",  level: 1, scaleId: 10082, createdAt: new Date(), updatedAt: new Date(), id: 10154 },
              { text: "Major projects have some test coverage.",  level: 2, scaleId: 10082, createdAt: new Date(), updatedAt: new Date(), id: 10155 },
              { text: "Major projects have 60% test coverage.",  level: 3, scaleId: 10082, createdAt: new Date(), updatedAt: new Date(), id: 10156 },
              { text: "Major projects have 80% test coverage.",  level: 4, scaleId: 10082, createdAt: new Date(), updatedAt: new Date(), id: 10157 },

              { text: "Can use TDD on command.",  level: 4, scaleId: 10083, createdAt: new Date(), updatedAt: new Date(), id: 10158 },


              { text: "Does not feel comfortable writing in and explaining Object Oriented Programming.",  level: 1, scaleId: 10084, createdAt: new Date(), updatedAt: new Date(), id: 10159 },
              { text: "Can write and explain OOP.",  level: 2, scaleId: 10084, createdAt: new Date(), updatedAt: new Date(), id: 10160 },
              { text: "Has used OOP to write custom modules or code in a live project.",  level: 3, scaleId: 10084, createdAt: new Date(), updatedAt: new Date(), id: 10161 },
              { text: "Has merged with already existing code bases.",  level: 4, scaleId: 10084, createdAt: new Date(), updatedAt: new Date(), id: 10162 },

              { text: "Cannot explain the MVC pattern.",  level: 1, scaleId: 10085, createdAt: new Date(), updatedAt: new Date(), id: 10163 },
              { text: "Is familiar with the MVC pattern of web and mobile development.",  level: 2, scaleId: 10085, createdAt: new Date(), updatedAt: new Date(), id: 10164 },
              { text: "Can customize MVC architecture.",  level: 3, scaleId: 10085, createdAt: new Date(), updatedAt: new Date(), id: 10165 },

              { text: "Has some familiarity with alternative architectures, e.g. MVVM, Reactive Programming, Microservices, etc.",  level: 2, scaleId: 10086, createdAt: new Date(), updatedAt: new Date(), id: 10167 },
              { text: "Has implemented and shipped projects with multiple  alternative architectures, e.g. MVVM, Reactive Programming, Microservices, etc.",  level: 3, scaleId: 10086, createdAt: new Date(), updatedAt: new Date(), id: 10168 },

              { text: "Is not familiar with major coding rules of thumb and vocabulary: Separation of Concerns, DRY code, Convention over Configuration, Modularity, Agile, RESTful, Resource, etc.",  level: 1, scaleId: 10087, createdAt: new Date(), updatedAt: new Date(), id: 10170 },
              { text: "Is familiar with some of the basic coding vocabulary and rules of thumb.",  level: 2, scaleId: 10087, createdAt: new Date(), updatedAt: new Date(), id: 10172 },
              { text: "Has optimized code for speed and scale through optimizing queries",  level: 4, scaleId: 10087, createdAt: new Date(), updatedAt: new Date(), id: 10173 },

              { text: "",  level: 1, scaleId: 10088, createdAt: new Date(), updatedAt: new Date(), id: 10174 },
              { text: "",  level: 2, scaleId: 10088, createdAt: new Date(), updatedAt: new Date(), id: 10175 },
              { text: "",  level: 3, scaleId: 10088, createdAt: new Date(), updatedAt: new Date(), id: 10176 },
              { text: "",  level: 4, scaleId: 10088, createdAt: new Date(), updatedAt: new Date(), id: 10177 },






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

    return queryInterface.bulkDelete('Criteria', null, {});

    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
