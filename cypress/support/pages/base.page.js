Cypress.Commands.add("fillField", (element, content) => {
  cy.get(element).invoke("show").focus().clear().type(content, { force: true });
});

Cypress.Commands.add("clickElement", (element) => {
  cy.get(element).click({ force: true });
});
