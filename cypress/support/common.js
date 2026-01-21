class Common {
  openPage(path) {
    cy.visit(path);
  }

  click(element) {
    element.click();
  }

  type(element, text) {
    element.clear().type(text);
  }

  assertText(selector, text) {
    cy.get(selector).should("have.text", text);
  }
}

export default Common;
