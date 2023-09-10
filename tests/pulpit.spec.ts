import { test, expect } from '@playwright/test';

test.describe('Pulpit tests', () => {

    test('quick payment with correct data', async ({ page }) => {
        await page.goto('https://demo-bank.vercel.app/');
        await page.getByTestId('login-input').fill('admin123');
        await page.getByTestId('password-input').fill('admin123');
        await page.getByTestId('login-button').click();

        await page.locator('#widget_1_transfer_receiver').selectOption('3');
        await page.locator('#widget_1_transfer_amount').fill('5');
        await page.locator('#widget_1_transfer_title').fill('eluwina');
        await page.getByRole('button', { name: 'wykonaj' }).click();
        await page.getByTestId('close-button').click();
        await expect(page.locator('#show_messages')).toHaveText('Przelew wykonany! Michael Scott - 5,00PLN - eluwina');
    });

});
