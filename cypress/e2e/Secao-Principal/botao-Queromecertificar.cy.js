describe('Botão Quero me certificar', () => {

  beforeEach(() => {

    // Ignora erros JS do site externo
    Cypress.on('uncaught:exception', () => {
      return false
    })

    cy.visit('https://qualidade.apprbs.com.br/certificacao')
  })

  it('Deve redirecionar para a página da rubeus', () => {

    cy.get('#ivw5ng')
      .invoke('removeAttr', 'target') // evita nova aba
      .click()

    // Agora valida que realmente mudou de domínio
    cy.origin('https://rubeus.com.br', () => {
      cy.location('hostname').should('eq', 'rubeus.com.br')
    })

  })

})