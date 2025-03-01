const firstNameField = "[data-test='firstName']";
const lastNameField = "[data-test='lastName']";
const postalCodeField = "[data-test='postalCode']";

const checkoutBtn = "[data-test='checkout']";
const continueBtn = "[data-test='continue']";
const finishBtn = "[data-test='finish']";

const totalPriceText = "[data-test='total-label']";
const completeHeaderText = "[data-test='complete-header']";
const completeDescriptionText = "[data-test='complete-text']";

Cypress.Commands.add("clickCheckoutBtn", () => { cy.clickElement(checkoutBtn); });
Cypress.Commands.add("clickContinueBtn", () => { cy.clickElement(continueBtn); });
Cypress.Commands.add("clickFinishBtn", () => { cy.clickElement(finishBtn); });

Cypress.Commands.add("fillFirstNameField", (firstName) => { cy.fillField(firstNameField, firstName); });
Cypress.Commands.add("fillLastNameField", (lastName) => { cy.fillField(lastNameField, lastName); });
Cypress.Commands.add("fillPostalCodeField", (postalCode) => { cy.fillField(postalCodeField, postalCode); });

Cypress.Commands.add("validateTotalPrice", (expectedPrice) => {
    cy.get(totalPriceText).should("contain", `Total: $${expectedPrice}`);
});

Cypress.Commands.add("validateSuccessMsg", (expectedText) => {
    cy.get(completeHeaderText).should("contain", expectedText);
});

Cypress.Commands.add("validateCompleteDescription", (expectedText) => {
    cy.get(completeDescriptionText).should("contain", expectedText);
});