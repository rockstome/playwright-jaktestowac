import { test, expect } from '@playwright/test';
test.describe('Desktop tests', () => {
  test.beforeEach(async ({ page }) => {
    const userId = 'testerLO';
    const userPassword = '10987654';
    const url = 'https://demo-bank.vercel.app/';
    await page.goto(url);
    await page.getByTestId('login-input').fill(userId);
    await page.getByTestId('password-input').fill(userPassword);
    await page.getByTestId('login-button').click();
  });
  test('quick payment with correct data', async ({ page }) => {
    // Arrange
    const receiverId = '2';
    const transferAmount = '150';
    const transferTitle = 'pizza';
    const expectedTransferReceiver = 'Chuck Demobankowy';
    // Act
    await page.locator('#widget_1_transfer_receiver').selectOption(receiverId);
    await page.locator('#widget_1_transfer_amount').fill(transferAmount);
    await page.locator('#widget_1_transfer_title').fill(transferTitle);
    await page.getByRole('button', { name: 'wykonaj' }).click();
    await page.getByTestId('close-button').click();
    // Assert
    await expect(page.locator('#show_messages')).toHaveText(
      `Przelew wykonany! ${expectedTransferReceiver} - ${transferAmount},00PLN - ${transferTitle}`
    );
  });
});

test('successful mobile top-up', async ({ page }) => {
  // Arrange
  const topUpReceiver = '500 xxx xxx';
  const topUpAmount = '50';
  const exprectedMessage = `Doładowanie wykonane! ${topUpAmount},00PLN na numer ${topUpReceiver}`;
  // Act
  await page.locator('#widget_1_topup_receiver').selectOption(topUpReceiver);
  await page.locator('#widget_1_topup_amount').fill(topUpAmount);
  await page.locator('#uniform-widget_1_topup_agreement span').click();
  await page.getByRole('button', { name: 'doładuj telefon' }).click();
  await page.getByTestId('close-button').click();
  // Assert
  await expect(page.locator('#show_messages')).toHaveText(exprectedMessage);
});
