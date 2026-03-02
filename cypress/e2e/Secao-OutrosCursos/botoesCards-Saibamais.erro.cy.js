describe('Botões "Saiba mais" ', () => {

    beforeEach(() => {
        cy.visit('https://qualidade.apprbs.com.br/certificacao')
    })
    
    it('Deve validar se o primeiro botão está visível e não clicável', () => {
        //Valida se o botão está visível e clicável no primeiro card
        cy.get('#inawao')
        .should('be.visible')
        .click()
    })

    it('Deve validar se o segundo botão está visível e não clicável', () => {
        //Valida se o botão está visível e clicável no segundo card
        cy.get('#inzf4v')
        .should('be.visible')
        .click()
    })

    it('Deve validar se o terceiro botão está visível e não clicável', () => {
        //Valida se o botão está visível e clicável no terceiro card
        cy.get('#i90t3o')
        .should('be.visible')
        .click()
    })
})