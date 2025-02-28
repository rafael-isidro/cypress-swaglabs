
context("LOGIN", () => {

    beforeEach(() => {
        cy.visit("/");
    })

    it("TC001 - Validar Login com Sucesso", () => {
        cy.fixture("loginData").then((loginData) => {
            cy.fillCredentials(
                loginData.username, 
                loginData.password,
                "Login bem sucedido."
            )

            cy.clickLoginBtn();
        })
    })
})