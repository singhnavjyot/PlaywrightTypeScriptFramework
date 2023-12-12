import { PlaywrightTestConfig, devices } from '@playwright/test'
// import { Playwright } from '@playwright';

const testConfig: PlaywrightTestConfig = {
  use: {
    trace: 'retry-with-trace',
    testIdAttribute: 'data-product-id',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    }
  ],
  reporter: process.env.CI ? [['github'], ['dot']] : 'list',
  outputDir: './test-results',
  retries: 0
}

export default testConfig