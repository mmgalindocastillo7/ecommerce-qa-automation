import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage.js';
import { InventoryPage } from '../../pages/inventoryPage.js';
import { CartPage } from '../../pages/cartPage.js';
import { CheckoutPage } from '../../pages/checkoutPage.js';

// ⏱️ Aumentamos timeout global del test
test.setTimeout(60000);

test('Flujo completo de compra', async ({ page }) => {
  const login = new LoginPage(page);
  const inventory = new InventoryPage(page);
  const cart = new CartPage(page);
  const checkout = new CheckoutPage(page);

  // 🌐 Navegación más estable
  await page.goto('https://www.saucedemo.com/', { waitUntil: 'domcontentloaded' });

  // ⏳ Espera a que cargue el login
  await page.waitForSelector('#user-name');

  // 🔐 Login
  await login.login('standard_user', 'secret_sauce');

  // 🛒 Agregar producto
  await inventory.addFirstProductToCart();
  await inventory.goToCart();

  // 📦 Ir a checkout
  await cart.goToCheckout();

  // 🧾 Completar datos
  await checkout.fillCheckoutInfo();

  // ✅ Finalizar compra
  await checkout.finishPurchase();

  // 🎯 Validación final
  await expect(page).toHaveURL(/checkout-complete/);
});