class CartPage{
 get expectedUrl(){
  return 'https://www.saucedemo.com/cart.html';
 }
 
 get cartItems() {
  return $$('[class="cart_item"]');
}

async getProductDetailsInCart() {
  const cartItems = await this.cartItems;
  if (cartItems.length === 0) {
    return { name: 0, price: 0 };
  }
  const firstProduct = await this.cartItems[0]; 
  const name = await firstProduct.$('.inventory_item_name').getText();
  const price = await firstProduct.$('.inventory_item_price').getText();
  return { name, price };
}

 async isCartPageVisible(){
  const currentUrl = await browser.getUrl();
  return currentUrl === this.expectedUrl;
 }

}
module.exports = new CartPage