const { defineConfig } = require('cypress')
const { debuggerPlugin } = require('cypress-debugger')

module.exports = defineConfig({
  e2e: {
    // baseUrl, etc
    supportFile: false,
    fixturesFolder: false,
    baseUrl: 'http://localhost:3000',
    video: true,
    screenshotOnRunFailure: true,
    setupNodeEvents(on, config) {
      debuggerPlugin(on, config)
      return config
    },
  },
})
