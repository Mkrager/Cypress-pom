import LoginPage from "../pages/loginPage";

describe("Redmine Login Tests", () => {
  beforeEach(() => {
    cy.visit("/login");
  });

  it("should login with valid credentials", () => {
    const username = Cypress.env("VALID_USER_LOGIN");
    const password = Cypress.env("VALID_USER_PASSWORD");

    LoginPage.login(username, password);

    cy.get("#loggedas").should("contain.text", username);
  });
});
