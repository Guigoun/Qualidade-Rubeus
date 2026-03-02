describe("Botao Quero me certificar", () => {
  beforeEach(() => {
    //Acessa o site a ser testado
    cy.visit("https://qualidade.apprbs.com.br/certificacao");
  });

  it("Deve validar que o botão está redirecionando incorretamente para o Google", () => {
    //Verifica se o botão é visível,clica e permite ficar na mesma aba
    cy.get("#ixy3u1")
      .invoke("removeAttr", "target")
      .should("be.visible")
      .and("have.attr", "href", "https://google.com.br/")
      .click({ force: false });
  });
});

