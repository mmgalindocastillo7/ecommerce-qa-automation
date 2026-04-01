import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';

test('Login exitoso', async ({ page }) => {
  const login = new LoginPage(page);

  await page.goto('https://www.saucedemo.com/');
  await login.login('standard_user', 'secret_sauce');

  await expect(page).toHaveURL(/inventory/);
});
