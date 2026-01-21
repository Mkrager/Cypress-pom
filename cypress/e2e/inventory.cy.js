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

  it("should sort products by z-a", () => {
    InventortPage.selectProductSort("za");

    cy.get(".inventory_item_name").then(($names) => {
      const productNames = $names.map((i, el) => el.innerText).get();

      const sortedNames = [...productNames].sort((a, b) => b.localeCompare(a));

      expect(productNames).to.deep.equal(sortedNames);
    });
  });

  it("should sort products by a-z", () => {
    InventortPage.selectProductSort("az");

    cy.get(".inventory_item_name").then(($names) => {
      const productNames = $names.map((i, el) => el.innerText).get();

      const sortedNames = [...productNames].sort((a, b) => a.localeCompare(b));

      expect(productNames).to.deep.equal(sortedNames);
    });
  });

  it("should sort products low-hight", () => {
    InventortPage.selectProductSort("lohi");

    cy.get(".inventory_item_price").then(($prices) => {
      const productPrices = $prices
        .map((i, el) => parseFloat(el.innerText.replace("$", "")))
        .get();

      const sortedPrices = [...productPrices].sort((a, b) => a - b);

      expect(productPrices).to.deep.equal(sortedPrices);
    });
  });

  it("should sort products hight-low", () => {
    InventortPage.selectProductSort("hilo");

    cy.get(".inventory_item_price").then(($prices) => {
      const productPrices = $prices
        .map((i, el) => parseFloat(el.innerText.replace("$", "")))
        .get();

      const sortedPrices = [...productPrices].sort((a, b) => b - a);

      expect(productPrices).to.deep.equal(sortedPrices);
    });
  });
});
