const LoginPage = require('../pageobjects/LoginPage')
const InventoryPage = require('../pageobjects/InventoryPage')

describe("Login with invalid data", () =>{
  it("Should login with invalid login", async () => {
    await LoginPage.open();
    await LoginPage.login("standard_user1", "secret_sauce");
    await expect(await LoginPage.isPasswordMasked()).toBe(true);
    await LoginPage.LoginButtonClick();
    await expect(await LoginPage.isUsernameErrorDisplayed()).toBe(true);
    await expect(await LoginPage.isPasswordErrorDisplayed()).toBe(true);
    await expect(await LoginPage.isDisplayedErrorMessage()).toBe(true);
  });
});