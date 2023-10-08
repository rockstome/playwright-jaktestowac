import { test, expect } from '@playwright/test';

for (let n = 1000; n < 1100; n++) {
  test(`xMNTT-${n}`, async ({ page }) => {
    if (n % 10 == 0) expect(true).toBe(false);
  });
}
