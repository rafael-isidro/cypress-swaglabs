const addToCartBtn = "[data-test='add-to-cart-sauce-labs-backpack']";
const firstProductNameText = "[data-test='inventory-item-name']";
const cartContainerBtn = "[data-test='shopping-cart-link']";
const cartLink = ".shopping_cart_link";

let firstProductName;

Cypress.Commands.add("getProductName", () => {
  cy.clickElement(addToCartBtn);
});

Cypress.Commands.add("addProductToCart", () => {
  cy.get(firstProductNameText)
    .first()
    .invoke("text")
    .then((text) => {
      firstProductName = text;
    });
});

Cypress.Commands.add("validateProductInCart", () => {
  cy.validateText(firstProductNameText, firstProductName);
});

Cypress.Commands.add("navigateToCart", () => {
  cy.clickElement(cartContainerBtn);
});
