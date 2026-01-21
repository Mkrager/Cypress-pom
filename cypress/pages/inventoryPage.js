import Common from "../support/common";

class InventoryPage extends Common {
  backPackAddToCartButton = () => cy.get("#add-to-cart-sauce-labs-backpack");
  backPackRemoveFromCartButton = () => cy.get("#remove-sauce-labs-backpack");

  productSortSelect() {
    return cy.get(".product_sort_container");
  }

  clickAddToCart = () => this.click(this.backPackAddToCartButton());

  clickRemoveFromCart = () => this.click(this.backPackRemoveFromCartButton());

  selectProductSort(valueOrText) {
    this.productSortSelect().select(valueOrText);
  }
}

export default new InventoryPage();
