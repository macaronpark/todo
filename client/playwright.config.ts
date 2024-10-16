import { defineConfig, devices } from '@playwright/test';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const BASE_FOLDER_PATH = 'e2e';

export default defineConfig({
  testDir: path.resolve(__dirname, BASE_FOLDER_PATH),
  outputDir: path.resolve(__dirname, BASE_FOLDER_PATH + '/test-results'),
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [
    [
      'html',
      {
        outputFolder: path.resolve(
          __dirname,
          BASE_FOLDER_PATH + '/test-report'
        ),
      },
    ],
  ],
  use: {
    baseURL: 'http://localhost:5173',
    trace: 'on-first-retry',
    locale: 'ko-KR',
    timezoneId: 'Asia/Seoul',
    headless: true,
  },
  webServer: {
    command: 'pnpm dev',
    url: 'http://localhost:5173',
    reuseExistingServer: !process.env.CI,
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
