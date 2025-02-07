class CheckoutPage {
get checkOutButton(){
  return $("#checkout");
}
get finishButton(){
  return $('#finish')
}
get backHomeButton(){
  return $('#back-to-products');
}
get continueButton(){
  return $('#continue');
}
get postalCodeField(){
  return $('#postal-code');
}
get lastNameField(){
  return $('#last-name');
}
get firstNameField(){
  return $('#first-name');
}
get checkoutCompleteMessage(){
  return $('[data-test="complete-header"]');
}
get checkoutForm() {
  return $('form'); 
}
get expectedUrl() {
  return 'https://www.saucedemo.com/checkout-step-two.html';
}
get expectedUrlComplete() {
return 'https://www.saucedemo.com/checkout-complete.html';
}
get errorMessage(){
  return $('//*[contains(text(), "Cart is empty")]')
}

async checkEmptyCartErrorMessage() {
  await this.errorMessage.waitForDisplayed({ timeout: 5000 });
}

async IsCheckOutFormVisible(){
  return await this.checkoutForm.isDisplayed()
}

async checkOutButtonClick(){
  await this.checkOutButton.click();
}
async inputFirstName(firstName) {
  await this.firstNameField.setValue(firstName);
}

async inputLastName(lastName) {
  await this.lastNameField.setValue(lastName);
}

async inputPostalCode(postalCode) {
  await this.postalCodeField.setValue(postalCode);
}
async clickContinue() {
  await this.continueButton.click();
}
async clickFinish() {
  await this.finishButton.click();
}
async clickBackHome() {
  await this.backHomeButton.click();
}
async isCheckoutCompleteMessage() {
  return await this.checkoutCompleteMessage.isDisplayed();
}
async isOverviewPage() {
  const currentUrl = await browser.getUrl();
  return currentUrl === this.expectedUrl;
}
async isCheckoutCompletePage() {
  const currentUrl = await browser.getUrl();
  return currentUrl === this.expectedUrlComplete;
}
}

module.exports = new CheckoutPage();
