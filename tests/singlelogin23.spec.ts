import { test, expect, type Page } from '@playwright/test';

test.describe.configure({ mode: 'serial' });
let page: Page;

test.describe('describe', () => {
  const variable = '- describe';
  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    test.step(`before all ${variable}`, async () => {});
  });

  test('first', async ({ page }) => {
    test.step(`test 1 ${variable}`, async () => {});
  });

  test('second', async ({ page }) => {
    test.step(`test 2 ${variable}`, async () => {});
  });
});
