const usernameField = "#user-name";
const passwordField = "#password";

const loginBtn = "#login-button";

const productSectionText = "[data-test='title']";
const loginErrorText = "[data-test='error']";

Cypress.Commands.add("fillUsername", (username) => {
  cy.fillField(usernameField, username);
});

Cypress.Commands.add("fillPassword", (password) => {
  cy.fillField(passwordField, password);
});

Cypress.Commands.add("clickLoginBtn", () => {
  cy.clickElement(loginBtn);
});

Cypress.Commands.add("validateLogin", () => {
  cy.validateText(productSectionText, "Products");
});

Cypress.Commands.add("validateInvalidLoginMsg", () => {
  cy.validateText(
    loginErrorText,
    "Epic sadface: Username and password do not match any user in this service"
  );
});

Cypress.Commands.add("validateEmptyFieldMsg", (field) => {
  const formattedField = field.charAt(0).toUpperCase() + field.slice(1);
  cy.validateText(
    loginErrorText,
    `Epic sadface: ${formattedField} is required`
  );
});

Cypress.Commands.add("validateBlockedLoginMsg", () => {
  cy.validateText(
    loginErrorText,
    "Epic sadface: Sorry, this user has been locked out."
  );
});
