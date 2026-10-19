import { test, expect } from '@playwright/test';

test('Login Validaion', async ({ page }) => {
  await page.goto('https://www.facebook.com/login/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Facebook/);
});