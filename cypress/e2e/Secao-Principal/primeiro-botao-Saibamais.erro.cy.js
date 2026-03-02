describe("Botão Saiba mais", () => {
  beforeEach(() => {
    //Acessa o site a ser testado
    cy.visit("https://qualidade.apprbs.com.br/certificacao");
  });

  it('Deve validar que o botão "Saiba mais" está visível porém não clicável', () => {
    //Valida se o botão 'Saiba mais' está visível e clicável"
    cy.get("#i7r4lj").should('be.visible').click();
  });
});
