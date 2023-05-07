const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
// import allureWriter from "@shelex/cypress-allure-plugin/writer";

module.exports = defineConfig({
  defaultCommandTimeout: 4000,
  viewportWidth: 1280,
  viewportHeight: 720,
  e2e: {
      setupNodeEvents(on, config) {
          allureWriter(on, config);
          return config;
      }
  }
});
