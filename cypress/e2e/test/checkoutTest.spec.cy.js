context("CHECKOUT", () => {
    beforeEach(() => {
      cy.visit("/");
      cy.fixture("loginData").then((loginData) => {
        cy.fillUsername(loginData.validCredentials.username);
        cy.fillPassword(loginData.validCredentials.password);

        cy.clickLoginBtn();
      });

      cy.getProductName();
      cy.addProductToCart();

      cy.navigateToCart();
      cy.validateProductInCart();

    });

    it("TC001 - Validar Checkout de carrinho com dados válidos", () => {
        cy.fixture("checkoutData").then((checkoutData) => {
            cy.clickCheckoutBtn();

            cy.fillFirstNameField(checkoutData.firstName);
            cy.fillLastNameField(checkoutData.lastName);
            cy.fillPostalCodeField(checkoutData.zipCode);
            cy.clickContinueBtn();

            cy.validateTotalPrice("32.39");
            cy.clickFinishBtn();

            cy.validateSuccessMsg("Thank you for your order!");
            cy.validateCompleteDescription("Your order has been dispatched, and will arrive just as fast as the pony can get there!");
        });
    });
});