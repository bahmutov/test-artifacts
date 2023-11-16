const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    // baseUrl, etc
    supportFile: false,
    fixturesFolder: false,
    baseUrl: 'http://localhost:3000',
    video: true,
    screenshotOnRunFailure: true,
    reporter: 'cypress-mochawesome-reporter',
    setupNodeEvents(cypressOn, config) {
      const on = require('cypress-on-fix')(cypressOn)
      require('cypress-mochawesome-reporter/plugin')(on)
      require('cypress-terminal-report/src/installLogsPrinter')(on)
    },
  },
})
