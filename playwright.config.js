// @ts-check
import { defineConfig, devices } from '@playwright/test';

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',
  timeout: 40000,
  expect: {
    timeout: 4000,
  },

  reporter: 'html',

  use: {
    // Default browser for tests when no project is specified
    browserName: 'chromium'
  },

  // projects: [
  //   {
  //     name: 'edge',
  //     use: {
  //       // Use the installed Microsoft Edge (Chromium) browser
  //       channel: 'msedge',
  //     },
  //   },
  // ],
});

