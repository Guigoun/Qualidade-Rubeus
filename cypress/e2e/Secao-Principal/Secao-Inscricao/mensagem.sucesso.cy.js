describe('Preenchimento do formulário de inscrição', () => {

  beforeEach(() => {
    cy.visit('https://qualidade.apprbs.com.br/certificacao')
  })

  it('Deve preencher o formulário com nome válido', () => {

    // Ignora o erro específico da aplicação
    cy.on('uncaught:exception', (err) => {
      if (err.message.includes('ActionsForm')) {
        return false
      }
    })

    // Preenche os campos nome, telefone, e-mail
    cy.get('input[name="pessoa.nome"]').should('be.visible').type('Carol')
    cy.get('input[name="pessoa.telefonePrincipal"]').should('be.enabled').type('61944237856')
    cy.get('input[name="pessoa.emailPrincipal"]').should('be.enabled').type('carol112@gmail.com')
    //Clica no botão 'AVANÇAR'
    cy.get('#rbBtnNext').click()
    //Verifica se a menssagem de erro é exibida na tela
    cy.contains('É necessário informar a base legal').should('be.visible')
  })

})