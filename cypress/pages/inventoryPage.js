import Common from "../support/common";

class InventoryPage extends Common {
  backPackAddToCartButton = () => cy.get("#add-to-cart-sauce-labs-backpack");
  backPackRemoveFromCartButton = () => cy.get("#remove-sauce-labs-backpack");
  shoppingCartIcon = () => cy.get(".shopping_cart_link");

  clickAddToCart() {
    this.click(this.backPackAddToCartButton());
  }

  clickRemoveFromCart() {
    this.click(this.backPackRemoveFromCartButton());
  }

  cartIconHasItems() {
    this.shoppingCartIcon().find(".shopping_cart_badge").should("exist");
  }

  cartIconIsEmpty() {
    this.shoppingCartIcon().find(".shopping_cart_badge").should("not.exist");
  }
}

export default new InventoryPage();
