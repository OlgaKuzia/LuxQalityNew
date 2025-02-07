class LoginPage {
  get userNameTextBox(){
    return $("#user-name")
  }
  get passwordTextBox(){
    return $("#password")
  }
  get loginButton(){
    return $("#login-button")
  }
  
  get usernameError() {
    return $('#user-name + svg.error_icon') 
        
}

get passwordError() {
    return $('#password + svg.error_icon') 
        
}

get errorMessage(){
  return $('[data-test="error"]')
}

get expectedUrl() {
  return 'https://www.saucedemo.com/';
}



  async login(username, password){
    await this.userNameTextBox.setValue(username);
    await this.passwordTextBox.waitForDisplayed({ timeout: 5000 });
    await this.passwordTextBox.setValue(password);
}

  async LoginButtonClick(){
      await this.loginButton.click();
}

  async isPasswordMasked() {
    const passwordFieldType = await this.passwordTextBox.getAttribute('type'); 
    return passwordFieldType === 'password'; 
}
  
  async isUsernameErrorDisplayed() {
    await this.usernameError.waitForDisplayed({ timeout: 5000 });
    return await this.usernameError.isDisplayed(); 
}


async isPasswordErrorDisplayed() {
  return await this.passwordError.isDisplayed(); 
}

async isDisplayedErrorMessage(){
  await this.errorMessage.waitForDisplayed({timeout: 5000});
  return await this.errorMessage.isDisplayed();
}

async isLoginPage() {
  const currentUrl = await browser.getUrl();
  return currentUrl === this.expectedUrl;
}
async getUsernameValue() {
  return await this.userNameTextBox.getValue();
}
async getPasswordValue() {
  return await this.passwordTextBox.getValue();
}
async open() {
  await browser.url('https://www.saucedemo.com');
}

}

module.exports = new LoginPage()
