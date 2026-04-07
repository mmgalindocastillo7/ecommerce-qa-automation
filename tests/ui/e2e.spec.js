import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage.js';
import { InventoryPage } from '../../pages/inventoryPage.js';
import { CartPage } from '../../pages/cartPage.js';
import { CheckoutPage } from '../../pages/checkoutPage.js';

// 📸 Hook global: screenshot si falla
test.afterEach(async ({ page }, testInfo) => {
  if (testInfo.status !== testInfo.expectedStatus) {
    await page.screenshot({ path: `error-${testInfo.title}.png` });
  }
});

// ⏱️ Aumentamos timeout
test.setTimeout(60000);

test('Flujo completo de compra', async ({ page }) => {
  const login = new LoginPage(page);
  const inventory = new InventoryPage(page);
  const cart = new CartPage(page);
  const checkout = new CheckoutPage(page);

  await page.goto('https://www.saucedemo.com/', { waitUntil: 'domcontentloaded' });

  await page.waitForSelector('#user-name');

  await login.login('standard_user', 'secret_sauce');

  await inventory.addFirstProductToCart();
  await inventory.goToCart();

  await cart.goToCheckout();

  await checkout.fillCheckoutInfo();
  await checkout.finishPurchase();

  await expect(page).toHaveURL(/checkout-complete/);
});