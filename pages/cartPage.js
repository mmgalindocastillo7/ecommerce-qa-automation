export class CartPage {
  constructor(page) {
    this.page = page;
    this.checkoutBtn = '#checkout';
  }

  async goToCheckout() {
    await this.page.click(this.checkoutBtn);
  }
}