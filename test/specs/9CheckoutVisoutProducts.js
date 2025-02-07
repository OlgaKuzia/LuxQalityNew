const LoginPage = require('../pageobjects/LoginPage')
const InventoryPage = require('../pageobjects/InventoryPage')
const CheckoutPage = require("../pageobjects/CheckOutPage");
const CartPage = require('../pageobjects/CartPage');

describe("Checkout without products", () =>{
  it("Error message should displayed, after clickinh on checkout button with empty cart", async () => {
    await LoginPage.open();
    await LoginPage.login("standard_user", "secret_sauce");
    await expect(await LoginPage.isPasswordMasked()).toBe(true);
    await LoginPage.LoginButtonClick();
    await InventoryPage.CartButtonClick();
    await CartPage.isCartPageVisible();
    await expect(await CartPage.getProductDetailsInCart()).toEqual({ name: 0, price: 0 });
    await CheckoutPage.checkOutButtonClick();
    await CartPage.isCartPageVisible();
    const errorText = await CheckoutPage.checkEmptyCartErrorMessage();
    await expect(errorText).toContain('Cart is empty');

  });
});
