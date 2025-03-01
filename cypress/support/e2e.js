import "./commands";
import "cypress-mochawesome-reporter/register";

Cypress.on("fail", (err, runnable) => {
  cy.screenshot("screenshot");

  throw err;
});
