import Common from "../support/common";

class HeaderSection extends Common {
  shoppingCartIcon = () => cy.get(".shopping_cart_link");

  cartIconHasItems = () =>
    this.shoppingCartIcon().find(".shopping_cart_badge").should("exist");

  cartIconIsEmpty = () =>
    this.shoppingCartIcon().find(".shopping_cart_badge").should("not.exist");

  clickShoppingCartIcon = () => this.click(this.shoppingCartIcon());
}

export default new HeaderSection();
