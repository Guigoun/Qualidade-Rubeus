describe("Botão Saiba mais", () => {
  beforeEach(() => {
    //Acessa o site a ser testado
    cy.visit("https://qualidade.apprbs.com.br/certificacao");
  });

  it("(Deve Falhar)Valida que o botão 'Saiba mais' não possui link para redirecionamento", () => {
    //Valida os atributos do botão "Saiba mais"
    cy.get("#i7r4lj")
    .find('a')
    .should("exist")
    .and("have.attr", "href")
  });
});
