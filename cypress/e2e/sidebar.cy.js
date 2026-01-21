import SideBarSection from "../sections/headerSection";
import LoginPage from "../pages/loginPage";

describe("Sidebar tests", () => {
  beforeEach(() => {
    LoginPage.loginWithValidData();
  });

  it("should logout user", () => {
    SideBarSection.clickSideBar();
    SideBarSection.clickLogout();
    cy.url().should("include", "/");
  });
});
