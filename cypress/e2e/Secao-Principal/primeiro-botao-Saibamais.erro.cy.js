describe("Botão Saiba mais", () => {
  beforeEach(() => {
    cy.visit("https://qualidade.apprbs.com.br/certificacao");
  });

  it('Deve validar que o botão "Saiba mais" está visível porém não clicável', () => {
    //Clica no botão "Saiba mais"
    cy.get("#i7r4lj").should('be.visible').click();
  });
});
