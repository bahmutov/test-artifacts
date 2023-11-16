const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    // baseUrl, etc
    supportFile: false,
    fixturesFolder: false,
    baseUrl: 'http://localhost:3000',
    video: true,
    screenshotOnRunFailure: true,
    setupNodeEvents(on, config) {
      const logOptions = {
        printLogsToConsole: 'always',
      }
      require('cypress-terminal-report/src/installLogsPrinter')(on, logOptions)
    },
  },
})
