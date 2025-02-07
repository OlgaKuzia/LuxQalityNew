const LoginPage = require('../pageobjects/LoginPage')
const InventoryPage = require('../pageobjects/InventoryPage')
const CartPage = require("../pageobjects/CartPage")

describe("Saving cart after LogOut", () =>{
  it("Should successfully save cart after Logout", async () => {
    await LoginPage.open();
    await LoginPage.login("standard_user", "secret_sauce");
    await LoginPage.LoginButtonClick();
    const initialCount = await InventoryPage.getCartCount(); 
    await InventoryPage.clickAddToCart();
    const updatedCount = await InventoryPage.getCartCount();
    expect(parseInt(updatedCount)).toBe(parseInt(initialCount) + 1);
    const productBeforeAdding = await InventoryPage.getProductDetails(0); 
    await InventoryPage.burgerMenuClick();
    await expect(await InventoryPage.burgerMenuOpen()).toBe(true);
    await expect(await InventoryPage.areAllMenuItemsVisible()).toBe(true);
    await InventoryPage.LogOutButtonClick();
    await expect(await LoginPage.isLoginPage()).toBe(true);
    await expect(await LoginPage.getUsernameValue()).toBe(''); 
    await expect(await LoginPage.getPasswordValue()).toBe('');
    await LoginPage.login("standard_user", "secret_sauce");
    await LoginPage.LoginButtonClick();
    await InventoryPage.CartButtonClick();
    await CartPage.isCartPageVisible();
    const productInCart = await CartPage.getProductDetailsInCart();
    await expect(productInCart.name).toBe(productBeforeAdding.name); 
    await expect(productInCart.price).toBe(productBeforeAdding.price); 
    
  });
});