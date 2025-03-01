const addToCartBtn = "[data-test='add-to-cart-sauce-labs-backpack']";
const removeFromCartBtn = "[data-test='remove-sauce-labs-backpack']";
const cartContainerBtn = "[data-test='shopping-cart-link']";

const firstProductNameText = "[data-test='inventory-item-name']";

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

Cypress.Commands.add("removeProductFromCart", () => {
  cy.clickElement(removeFromCartBtn);
});

Cypress.Commands.add("validateProductRemoved", () => {
  cy.validateElementNotPresent(firstProductNameText);
});
