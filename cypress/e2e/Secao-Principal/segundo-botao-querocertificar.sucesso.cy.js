describe("Botão Quero me certificar", () => {
  beforeEach(() => {
    //Trata o erro no domínio da Rubeus
    cy.on("uncaught:exception", (err) => {
      if (err.message.includes("jetStickySection")) {
        return false;
      }
    });

    //Acessa o site a ser testado
    cy.visit("https://qualidade.apprbs.com.br/certificacao");
  });

  it("Deve redirecionar para a página da rubeus", () => {
    //Clica no botão e permite ficar na mesma aba
    cy.get("#i72bga").invoke("removeAttr", "target").click();

    //valida que realmente mudou de domínio
    cy.origin("https://rubeus.com.br", () => {
      cy.location("hostname").should("eq", "rubeus.com.br");
    });
  });
});
