import Common from "../support/common";

class LoginPage extends Common {
  usernameField = () => cy.get("#user-name");
  passwordField = () => cy.get("#password");
  loginButton = () => cy.get("#login-button");
  errorMessage = () => cy.get(".flash.error");

  enterUsername(username) {
    this.type(this.usernameField(), username);
  }

  enterPassword(password) {
    this.type(this.passwordField(), password);
  }

  clickLogin() {
    this.click(this.loginButton());
  }

  login(username, password) {
    this.enterUsername(username);
    this.enterPassword(password);
    this.clickLogin();
  }
}

export default new LoginPage();
