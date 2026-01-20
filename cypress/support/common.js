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

  assertVisible(element) {
    element.should("be.visible");
  }

  assertText(element, text) {
    element.should("have.text", text);
  }
}

export default Common;
