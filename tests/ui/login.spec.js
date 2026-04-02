import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/loginPage.js';

test('Login exitoso', async ({ page }) => {
  test.setTimeout(60000);

  const login = new LoginPage(page);

  await page.goto('https://www.saucedemo.com/', { waitUntil: 'load' });
  await login.login('standard_user', 'secret_sauce');

  await expect(page).toHaveURL(/inventory/);
});
