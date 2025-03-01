context("CARRINHO", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.fixture("loginData").then((loginData) => {
      cy.fillUsername(loginData.validCredentials.username);
      cy.fillPassword(loginData.validCredentials.password);
      cy.clickLoginBtn();
    });
  });

  it("TC001 - Validar adição de produto ao carrinho", () => {
    cy.getProductName();
    cy.addProductToCart();
    cy.navigateToCart();
    cy.validateProductInCart();
  });

  it("TC002 - Validar remoção de produto do carrinho", () => {
    cy.getProductName();
    cy.addProductToCart();
    cy.navigateToCart();
    cy.validateProductInCart();
    cy.removeProductFromCart();
    cy.validateElementNotPresent();
  });
});
