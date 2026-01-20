import Common from "../support/common";

class ShoppingCartPage extends Common {
  checkoutButton = () => cy.get("#checkout");
  continueButton = () => cy.get("#continue");
  finishButton = () => cy.get("#finish");
  continueShoppingButton = () => cy.get("#continue-shopping");
  firstNameField = () => cy.get("#first-name");
  lastNameField = () => cy.get("#last-name");
  postalCodeField = () => cy.get("#postal-code");

  enterFirstName = (firstName) => this.type(this.firstNameField(), firstName);
  enterLastName = (lastName) => this.type(this.lastNameField(), lastName);
  enterPostalCode = (postalCodeField) =>
    this.type(this.postalCodeField(), postalCodeField);

  clickCheckout = () => this.click(this.checkoutButton());

  clickContinue = () => this.click(this.continueButton());

  clickFinish = () => this.click(this.finishButton());

  clickContinueShoppingButton() {
    this.continueShoppingButton().should("be.visible").click();
  }
}

export default new ShoppingCartPage();
