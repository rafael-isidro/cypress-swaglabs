Cypress.Commands.add("fillField", (element, content) => {
  cy.get(element).invoke("show").focus().clear().type(content, { force: true });
});

Cypress.Commands.add("clickElement", (element) => {
  cy.get(element).click({ force: true });
});

Cypress.Commands.add("validateText", (element, text) => {
  cy.get(element).contains(text);
});

Cypress.Commands.add("getText", (element) => {
  cy.get(element).invoke("text");
});

//Validar que não está presente o elemento
Cypress.Commands.add("validateElementNotPresent", (element) => {
  cy.get(element).should("not.exist");
});
