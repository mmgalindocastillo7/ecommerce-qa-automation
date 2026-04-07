export class CheckoutPage {
  constructor(page) {
    this.page = page;
    this.firstName = '#first-name';
    this.lastName = '#last-name';
    this.postalCode = '#postal-code';
    this.continueBtn = '#continue';
    this.finishBtn = '#finish';
  }

  async fillCheckoutInfo() {
    await this.page.fill(this.firstName, 'Test');
    await this.page.fill(this.lastName, 'User');
    await this.page.fill(this.postalCode, '12345');
    await this.page.click(this.continueBtn);
  }

  async finishPurchase() {
    await this.page.click(this.finishBtn);
  }
}