import LoginPage from "../pages/loginPage";

describe("Login Tests", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should login with valid credentials", () => {
    const username = Cypress.env("VALID_USER_LOGIN");
    const password = Cypress.env("VALID_USER_PASSWORD");

    LoginPage.login(username, password);

    LoginPage.assertText(".title", "Products");
  });

  it("should not login with invalid credentials", () => {
    const username = "invalid username";
    const password = Cypress.env("VALID_USER_PASSWORD");

    LoginPage.login(username, password);

    LoginPage.assertText(
      "h3",
      "Epic sadface: Username and password do not match any user in this service",
    );
  });
});
