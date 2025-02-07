const LoginPage = require('../pageobjects/LoginPage')
const InventoryPage = require('../pageobjects/InventoryPage')

describe("Login with valid data", () =>{
  it("Should login with valid data", async () => {
 
    await LoginPage.open();
    await LoginPage.login("standard_user", "secret_sauce");
    await expect(await LoginPage.isPasswordMasked()).toBe(true);
    await LoginPage.LoginButtonClick();
    await expect(await InventoryPage.isInventoryPage()).toBe(true);
    await expect(await InventoryPage.isProductsDisplayed()).toBe(true);
    await expect(await InventoryPage.isCartDisplayed()).toBe(true);
  });
});
