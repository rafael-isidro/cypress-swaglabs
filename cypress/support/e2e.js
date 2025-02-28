import "./commands";

Cypress.on("fail", (err, runnable) => {
  cy.screenshot("screenshot");

  throw err;
});
