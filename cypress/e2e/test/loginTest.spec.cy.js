context("LOGIN", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("TC001 - Validar Login com Credenciais Válidas", () => {
    cy.fixture("loginData").then((loginData) => {
      cy.fillUsername(loginData.validCredentials.username);
      cy.fillPassword(loginData.validCredentials.password);
      cy.clickLoginBtn();
      cy.validateLogin();
    });
  });

  it("TC002 - Tentar realizar Login com Username Inválido", () => {
    cy.fixture("loginData").then((loginData) => {
      cy.fillUsername(loginData.invalidCredentials.username);
      cy.fillPassword(loginData.validCredentials.password);
      cy.clickLoginBtn();
      cy.validateInvalidLoginMsg();
    });
  });

  it("TC003 - Tentar realizar Login com Senha Inválida", () => {
    cy.fixture("loginData").then((loginData) => {
      cy.fillUsername(loginData.validCredentials.username);
      cy.fillPassword(loginData.invalidCredentials.password);
      cy.clickLoginBtn();
      cy.validateInvalidLoginMsg();
    });
  });

  it("TC004 - Tentar realizar Login com Username vazio", () => {
    cy.fixture("loginData").then((loginData) => {
      cy.fillPassword(loginData.validCredentials.password);
      cy.clickLoginBtn();
      cy.validateEmptyFieldMsg("username");
    });
  });

  it("TC005 - Tentar realizar Login com Senha vazia", () => {
    cy.fixture("loginData").then((loginData) => {
      cy.fillUsername(loginData.validCredentials.username);
      cy.clickLoginBtn();
      cy.validateEmptyFieldMsg("password");
    });
  });

  it("TC006 - Tentar realizar Login com Conta Bloqueada", () => {
    cy.fixture("loginData").then((loginData) => {
      cy.fillUsername(loginData.blockedAccount.username);
      cy.fillPassword(loginData.blockedAccount.password);
      cy.clickLoginBtn();
      cy.validateBlockedLoginMsg();
    });
  });
});
