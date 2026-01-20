import LoginPage from "../pages/loginPage";
import InventoryPage from "../pages/inventoryPage";
import ShoppingCartPage from "../pages/shoppingCartPage";

describe("Shopping cart tests", () => {
  beforeEach(() => {
    LoginPage.loginWithValidData();
  });

  it("should return to inventory from cart", () => {
    InventoryPage.clickShoppingCartIcon();
    ShoppingCartPage.clickContinueShoppingButton();
    cy.url().should("include", "/inventory.html");
  });

  it("should succesffuly create order", () => {
    InventoryPage.clickAddToCart();
    InventoryPage.clickShoppingCartIcon();
    ShoppingCartPage.clickCheckout();

    ShoppingCartPage.enterFirstName("firstName");
    ShoppingCartPage.enterLastName("lastName");
    ShoppingCartPage.enterPostalCode("postalCode");
    ShoppingCartPage.clickContinue();
    ShoppingCartPage.clickFinish();

    cy.get(".complete-header").should(
      "contain.text",
      "Thank you for your order!",
    );
  });
});
