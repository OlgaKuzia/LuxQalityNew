const LoginPage = require('../pageobjects/LoginPage')
const InventoryPage = require('../pageobjects/InventoryPage')

describe("Logout", () =>{
  it("Should successfully logout", async () => {
    await LoginPage.open();
    await LoginPage.login("standard_user", "secret_sauce");
    await LoginPage.LoginButtonClick();
    await InventoryPage.burgerMenuClick();
    await expect(await InventoryPage.burgerMenuOpen()).toBe(true);
    await expect(await InventoryPage.areAllMenuItemsVisible()).toBe(true);
    await InventoryPage.LogOutButtonClick();
    await expect(await LoginPage.isLoginPage()).toBe(true);
    await expect(await LoginPage.getUsernameValue()).toBe(''); 
    await expect(await LoginPage.getPasswordValue()).toBe('');

  });
});