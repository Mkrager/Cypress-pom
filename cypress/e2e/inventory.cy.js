import InventortPage from "../pages/inventoryPage";
import LoginPage from "../pages/loginPage";

describe("Add and remove from shopping Cart Tests", () => {
  beforeEach(() => {
    LoginPage.loginWithValidData();
  });

  it("should add item to cart", () => {
    InventortPage.clickAddToCart();
    InventortPage.cartIconHasItems();
  });

  it("should remove item from cart", () => {
    InventortPage.clickAddToCart();
    InventortPage.clickRemoveFromCart();
    InventortPage.cartIconIsEmpty();
  });
});
