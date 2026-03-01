describe('Botão Saiba mais', () => {

    beforeEach(() => {
        cy.visit('https://qualidade.apprbs.com.br/certificacao')
    })

    it('clica no Botão "Saiba mais" e não redireciona para a página', () => {
        //Clica no botão "Saiba mais"
        cy.get('#i7r4lj').cick()
    })
})