const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
   baseUrl: 'https://opensource-demo.orangehrmlive.com/',

    env: {
      username: "Admin",
      password: "admin123"
    },

    setupNodeEvents(on, config) {
      // implement node event listeners here
      },
  }


});
