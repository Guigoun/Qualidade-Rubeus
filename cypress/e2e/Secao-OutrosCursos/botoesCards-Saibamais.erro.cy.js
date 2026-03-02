describe('Botões "Saiba mais" ', () => {

    beforeEach(() => {
        cy.visit('https://qualidade.apprbs.com.br/certificacao')
    })

    it('Deve validar se o primeiro botão está visível e não clicável', () => {
        cy.get('#inawao')
        .should('be.visible')
        .click()
    })

    it('Deve validar se o segundo botão está visível e não clicável', () => {
        cy.get('#inzf4v')
        .should('be.visible')
        .click()
    })

    it('Deve validar se o terceiro botão está visível e não clicável', () => {
        cy.get('#i90t3o')
        .should('be.visible')
        .click()
    })
})