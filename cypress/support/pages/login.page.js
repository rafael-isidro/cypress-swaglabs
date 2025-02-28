import basePage from "./base.page";

const usernameField = "#user-name";
const passwordField = "#password";

const loginBtn = "#login-button";

Cypress.Commands.add("fillCredentials", (username, password) => {
  cy.fillField(usernameField, username);
  cy.fillField(passwordField, password);
});

Cypress.Commands.add("clickLoginBtn", () => {
  cy.clickElement(loginBtn);
})
