require("dotenv").config();
const { defineConfig } = require("cypress");

console.log("BASE_URL:", process.env.BASE_URL);

module.exports = defineConfig({
  e2e: {
    baseUrl: process.env.BASE_URL || "https://www.redmine.org",
    chromeWebSecurity: false,
  },
  env: {
    VALID_USER_LOGIN: process.env.VALID_USER_LOGIN,
    VALID_USER_PASSWORD: process.env.VALID_USER_PASSWORD,
  },
});
