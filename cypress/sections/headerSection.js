import Common from "../support/common";

class HeaderSection extends Common {
  shoppingCartIcon = () => cy.get(".shopping_cart_link");
  sideBarButton = () => cy.get("#react-burger-menu-btn");
  logoutButton = () => cy.get("#logout_sidebar_link");

  clickSideBar = () => this.click(this.sideBarButton());

  clickLogout = () => this.click(this.logoutButton());

  cartIconHasItems = () =>
    this.shoppingCartIcon().find(".shopping_cart_badge").should("exist");

  cartIconIsEmpty = () =>
    this.shoppingCartIcon().find(".shopping_cart_badge").should("not.exist");

  clickShoppingCartIcon = () => this.click(this.shoppingCartIcon());
}

export default new HeaderSection();
