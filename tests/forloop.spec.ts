import { test, expect } from '@playwright/test';

test.describe('loop', () => {
  for (let n = 1000; n < 1050; n++) {
    test(`MNTT-${n}`, async ({ page }) => {});
  }
});
