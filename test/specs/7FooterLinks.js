const LoginPage = require('../pageobjects/LoginPage')
const FooterLinks = require("../pageobjects/FooterLinks")

describe("Openings links in the footer", () =>{
  it("Should open links in the footer", async () => {
    await LoginPage.open();
    await LoginPage.login("standard_user", "secret_sauce");
    await expect(await LoginPage.isPasswordMasked()).toBe(true);
    await LoginPage.LoginButtonClick();
    await FooterLinks.twitterButtonClick();
   const allHandles = await browser.getWindowHandles(); 
   await browser.switchToWindow(allHandles[1]);
   let currentUrl = await browser.getUrl();
   await expect(currentUrl).toContain('https://x.com/saucelabs'); 
   await browser.closeWindow();
   await browser.switchToWindow(allHandles[0]);
   await FooterLinks.facebookButtonClick();   
   const allHandles2 = await browser.getWindowHandles();
   await browser.switchToWindow(allHandles2[1]);
   currentUrl = await browser.getUrl();
   await expect(currentUrl).toBe('https://www.facebook.com/saucelabs'); 
   await browser.closeWindow(); 
   await browser.switchToWindow(allHandles2[0]);
   await FooterLinks.linkedinButtonClick();
   const allHandles3 = await browser.getWindowHandles();
   await browser.switchToWindow(allHandles3[1]);
   currentUrl = await browser.getUrl();
   expect(currentUrl).toBe('https://www.linkedin.com/company/sauce-labs/'); 
   await browser.closeWindow();
   await browser.switchToWindow(allHandles3[0]);

  });
});