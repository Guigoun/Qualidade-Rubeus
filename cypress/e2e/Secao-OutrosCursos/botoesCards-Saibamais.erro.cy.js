describe('Botões "Saiba mais" ', () => {

    beforeEach(() => {
        cy.visit('https://qualidade.apprbs.com.br/certificacao')
    })
    
    it("(Deve Falhar) Deve validar que o primeiro botão não está redirecionável", () => {
        //Valida os atributos do botão "Saiba mais" do primeiro card
        cy.get('#inawao')
        .find('a')
        .should("exist")
        .and("have.attr", "href")
    })

    it("(Deve Falhar) Deve validar que o segundo botão não está redirecionável", () => {
        //Valida os atributos do botão "Saiba mais" do segundo card
        cy.get('#inzf4v')
        .find('a')
        .should("exist")
        .and("have.attr", "href")
    })

    it("(Deve Falhar) Deve validar que o terceiro botão não está redirecionável", () => {
        //Valida os atributos do botão "Saiba mais" do terceiro card
        cy.get('#i90t3o')
        .find('a')
        .should("exist")
        .and("have.attr", "href")
    })
})