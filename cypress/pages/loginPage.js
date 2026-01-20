import Common from "../support/common";

class LoginPage extends Common {
  // Локатори
  usernameField = () => cy.get("#username");
  passwordField = () => cy.get("#password");
  loginButton = () => cy.get("input[name=login]");
  errorMessage = () => cy.get(".flash.error");

  // Методи
  enterUsername(username) {
    this.type(this.usernameField(), username);
  }

  enterPassword(password) {
    this.type(this.passwordField(), password);
  }

  clickLogin() {
    this.click(this.loginButton());
  }

  assertLoginFailed() {
    this.assertVisible(this.errorMessage());
  }

  login(username, password) {
    this.enterUsername(username);
    this.enterPassword(password);
    this.clickLogin();
  }
}

export default new LoginPage();
