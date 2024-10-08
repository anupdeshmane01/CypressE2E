const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    screenshotOnRunFailure: true,
    video:true,
    specPattern:"cypress/e2e/**/**/*.cy.{js,jsx,ts,tsx}",
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here
    },
    
  },
  
  env:{
    URL: 'https://naveenautomationlabs.com/opencart/index.php?route=account/register',
    uname: "Anup"
  },
 

  
});
