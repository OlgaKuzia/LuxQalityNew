class InventoryPage{

get productList() {
  return $$('[class="inventory_item"]');
}
get ProductContainer(){
  return $("#inventory_container")
}

get cartIcon() {
    return $('.shopping_cart_link'); 
}

get burgerMenuButton(){
  return $("#react-burger-menu-btn")
}
get burgerMenu() {
  return $(".bm-menu-wrap")
}


get LogOutLink(){
  return $("#logout_sidebar_link")
}

get RessetAppLink(){
  return $("#reset-sidebar-link")
}


get menuItems() {
  return $$('nav.bm-item-list .bm-item');  
}

get expectedUrl() {
  return 'https://www.saucedemo.com/inventory.html';
}
get addToCartButtons() {
  return $$('button.btn_inventory'); 
}

get cartCount() {
  return $('.shopping_cart_badge'); 
}
get cartLink(){
  return $("#shopping_cart_container")
}

async isProductsDisplayed() {
    await this.ProductContainer.waitForDisplayed({ timeout: 3000 });
    return await this.ProductContainer.isDisplayed();
}


async isCartDisplayed() {
    return await this.cartIcon.isDisplayed();
}

async burgerMenuClick(){
  await this.burgerMenuButton.click()
}
async burgerMenuOpen(){
  await this.burgerMenu.waitForDisplayed({ timeout: 5000 });
  return await this.burgerMenu.isDisplayed()
}
async isElementsVisible(){
  await this.burgerMenu.waitForDisplayed({ timeout: 5000 });
  return await this.AllItemsLink.isDisplayed()
}

async areAllMenuItemsVisible() {
  const items = await this.menuItems;  
  for (let i = 0; i < items.length; i++) {
    const isVisible = await items[i].isDisplayed();  
    if (!isVisible) {
      throw new Error(`Menu item ${i + 1} is not visible.`);
    }
  }
  return true;  
}
async LogOutButtonClick(){
  await this.LogOutLink.click()
}

async isInventoryPage() {
  const currentUrl = await browser.getUrl();
  return currentUrl === this.expectedUrl;
}
 
 async clickAddToCart() {
  const buttons = await this.addToCartButtons;
  await buttons[0].click(); 
}

async getCartCount() {
  try {
    return await this.cartCount.getText(); 
  } catch (error) {
    return '0'; 
  }
}
async getProductDetails(index) {
  const product = await this.productList[index];
  const name = await product.$('.inventory_item_name').getText();
  const price = await product.$('.inventory_item_price').getText();
  return { name, price }; 
}
async CartButtonClick(){
  await this.cartLink.click()
}

}

module.exports = new InventoryPage();
