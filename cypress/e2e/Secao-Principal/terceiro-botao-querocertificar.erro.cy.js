describe("Botao Quero me certificar", () => {
  beforeEach(() => {
    //Acessa o site a ser testado
    cy.visit("https://qualidade.apprbs.com.br/certificacao");
  });

  it("Deve validar que o botão está redirecionando incorretamente para o Google", () => {
    //Clica no botão "Quero me certificar"
    cy.get("#ixy3u1").invoke("removeAttr", "target").click();

    //Valida que realmente mudou de domínio
    cy.origin("https://google.com.br/", () => {
      cy.location("hostname").should("eq", "www.google.com");
    });
  });
});
