import LoginPage from "../pages/loginPage";
import InventoryPage from "../pages/inventoryPage";
import ShoppingCartPage from "../pages/shoppingCartPage";
import HeaderSection from "../sections/headerSection";

describe("Shopping cart tests", () => {
  beforeEach(() => {
    LoginPage.loginWithValidData();
  });

  it("should return to inventory from cart", () => {
    HeaderSection.clickShoppingCartIcon();
    ShoppingCartPage.clickContinueShoppingButton();

    cy.url().should("include", "/inventory.html");
  });

  it("should succesffuly create order", () => {
    InventoryPage.clickAddToCart();
    HeaderSection.clickShoppingCartIcon();
    ShoppingCartPage.clickCheckout();

    ShoppingCartPage.enterFirstName("firstName");
    ShoppingCartPage.enterLastName("lastName");
    ShoppingCartPage.enterPostalCode("postalCode");
    ShoppingCartPage.clickContinue();
    ShoppingCartPage.clickFinish();

    ShoppingCartPage.assertText(
      ".complete-header",
      "Thank you for your order!",
    );
  });

  it("should throw empty lastName validation error when create order", () => {
    InventoryPage.clickAddToCart();
    HeaderSection.clickShoppingCartIcon();
    ShoppingCartPage.clickCheckout();

    ShoppingCartPage.enterFirstName("firstName");
    ShoppingCartPage.enterPostalCode("postalCode");
    ShoppingCartPage.clickContinue();

    ShoppingCartPage.assertText("h3", "Error: Last Name is required");
  });
});
