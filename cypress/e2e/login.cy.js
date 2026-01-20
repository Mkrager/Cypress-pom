import LoginPage from "../pages/loginPage";

describe("Login Tests", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should login with valid credentials", () => {
    const username = Cypress.env("VALID_USER_LOGIN");
    const password = Cypress.env("VALID_USER_PASSWORD");

    LoginPage.login(username, password);

    cy.get(".title").should("contain.text", "Products");
  });

  it("should not login with invalid credentials", () => {
    const username = "invalid username";
    const password = Cypress.env("VALID_USER_PASSWORD");

    LoginPage.login(username, password);
    cy.get("h3").should(
      "contain.text",
      "Epic sadface: Username and password do not match any user in this service",
    );
  });
});
