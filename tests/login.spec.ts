import { test, expect } from '@playwright/test';

test.describe('Login tests', () => {
  const url = 'https://demo-bank.vercel.app/';

  test('login with correct credentials', async ({ page }) => {
    await page.goto(url);
    await expect(page).toHaveTitle(new RegExp('Logowanie'));
    await page.getByTestId('login-input').fill('admin123');
    await page.getByTestId('password-input').fill('admin123');
    await page.getByTestId('login-button').click();
    await expect(page).toHaveTitle(new RegExp('Pulpit'), { timeout: 0 });
    await expect(page.getByTestId('user-name')).toHaveText('Jan Demobankowy');
  });

  test('login with incorrect login', async ({ page }) => {
    await page.goto(url);
    await page.getByTestId('login-input').click();
    await page.getByTestId('login-input').fill('admin');
    await page.getByTestId('password-input').click();
    // await page.getByTestId('login-input').blur();
    await expect(page.getByTestId('error-login-id')).toHaveText('identyfikator ma min. 8 znaków');
  });

});
