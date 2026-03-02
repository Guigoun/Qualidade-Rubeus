describe("Botões 'Quero me certificar'", () => {
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

  it("Deve validar o redirecionamento para página da rubeus", () => {
    //Valida se o botão é visível, clica e permite ficar na mesma aba
    cy.get("#ivw5ng")
      .invoke("removeAttr", "target")
      .should("be.visible")
      .and("have.attr", "href", "https://rubeus.com.br/")
      .click({ force: false });
  });

  it("Deve validar o redirecionamento para página da rubeus", () => {

    //Acessa o site novamente - Evita que fique preso na tela branca do domínio externo
    //A automação está sofrendo conflito de domínio
    cy.visit("https://qualidade.apprbs.com.br/certificacao");

    //Valida se o botão é visível, clica e permite ficar na mesma aba
    cy.get("#i72bga")
      .invoke("removeAttr", "target")
      .should("be.visible")
      .and("have.attr", "href", "https://rubeus.com.br/")
      .click({ force: false });
  });
});
