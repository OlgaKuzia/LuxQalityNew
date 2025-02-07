const LoginPage = require('../pageobjects/LoginPage')
const InventoryPage = require('../pageobjects/InventoryPage')
const CheckoutPage = require("../pageobjects/CheckOutPage")
const CartPage = require("../pageobjects/CartPage")

describe("Valid checkout", () =>{
  it("Should checkout with products in the cart", async () => {
    await LoginPage.open();
    await LoginPage.login("standard_user", "secret_sauce"); 
    await LoginPage.LoginButtonClick();
    const initialCount = await InventoryPage.getCartCount(); 
    await InventoryPage.clickAddToCart();
    const updatedCount = await InventoryPage.getCartCount();
    expect(parseInt(updatedCount)).toBe(parseInt(initialCount) + 1);
    const productBeforeAdding = await InventoryPage.getProductDetails(0); 
    await InventoryPage.CartButtonClick();
    await CartPage.isCartPageVisible();
    const productInCart = await CartPage.getProductDetailsInCart();
    await expect(productInCart.name).toBe(productBeforeAdding.name); 
    await expect(productInCart.price).toBe(productBeforeAdding.price);
    await CheckoutPage.checkOutButtonClick();
    await expect(await CheckoutPage.IsCheckOutFormVisible()).toBe(true);
    await CheckoutPage.inputFirstName('Jon');
    await CheckoutPage.inputLastName('Doe');
    await CheckoutPage.inputPostalCode('12345');
    await CheckoutPage.clickContinue();
    await expect(await CheckoutPage.isOverviewPage()).toBe(true);
    await expect(productInCart.name).toBe(productBeforeAdding.name); 
    await expect(productInCart.price).toBe(productBeforeAdding.price);
    await CheckoutPage.clickFinish();
    await expect(await CheckoutPage.isCheckoutCompletePage()).toBe(true);
    await expect(await CheckoutPage.isCheckoutCompleteMessage()).toBe(true);
    await CheckoutPage.clickBackHome();
    await expect(await InventoryPage.isInventoryPage()).toBe(true);
    await expect(await InventoryPage.isProductsDisplayed()).toBe(true);
    await expect(await InventoryPage.getCartCount()).toBe("0");
    
  });
});