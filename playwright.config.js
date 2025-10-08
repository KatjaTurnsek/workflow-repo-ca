const { defineConfig } = require('@playwright/test');
require('dotenv').config();

const BASE_URL = process.env.BASE_URL || 'http://localhost:5173';

module.exports = defineConfig({
  testDir: 'e2e',
  use: {
    baseURL: BASE_URL,
    headless: true,
  },
  webServer: {
    command: 'npx http-server -p 5173 -c-1 .',
    url: BASE_URL,
    reuseExistingServer: true,
    timeout: 60_000,
  },
});
