class FooterLinks{
    get twitterIcon() {
      return $('footer a[href="https://twitter.com/saucelabs"]');
    };
  
    get facebookIcon() {
      return $('footer a[href="https://www.facebook.com/saucelabs"]');
    };
  
    get linkedinIcon() {
      return $('footer a[data-test="social-linkedin"]');
    };
    

  async twitterButtonClick(){
    return this.twitterIcon.click();
  }
  async facebookButtonClick(){
    return this.facebookIcon.click();
  }

  async linkedinButtonClick(){
    const linkedinButton = await this.linkedinIcon;
    await linkedinButton.waitForDisplayed({ timeout: 5000 });
    return this.linkedinIcon.click();
  }
  }
  module.exports = new FooterLinks();