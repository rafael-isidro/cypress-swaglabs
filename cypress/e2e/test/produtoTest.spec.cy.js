context("CARRINHO", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.fixture("loginData").then((loginData) => {
      cy.fillUsername(loginData.validCredentials.username);
      cy.fillPassword(loginData.validCredentials.password);
      cy.clickLoginBtn();
    });
  });

  it("TC001 - Adicionar produto ao carrinho", () => {
    cy.getProductName();
    cy.addProductToCart();
    cy.navigateToCart();
    cy.validateProductInCart();
  });

});
