const { defineConfig } = require("cypress");

module.exports = defineConfig({

  e2e: {

    // specPattern: "**/*.feature",
    "baseUrl": "https://opensource-demo.orangehrmlive.com",

    // video: true,

    setupNodeEvents(on, config) {

      // implement node event listeners here
    },
  },

});
