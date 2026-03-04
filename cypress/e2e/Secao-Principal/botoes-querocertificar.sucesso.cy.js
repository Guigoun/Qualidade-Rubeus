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
    //Valida os atributos do link e se está visível
    cy.get("#ivw5ng")
      .should("be.visible")
      .and("have.attr", "href", "https://rubeus.com.br/")
      .and("have.attr", "target", "_blank")
  });

  it("Deve validar o redirecionamento para página da rubeus", () => {
      //Valida os atributos do link e se está visível
      cy.get("#i72bga")
      .should("be.visible")
      .and("have.attr", "href", "https://rubeus.com.br/")
      .and("have.attr", "target", "_blank")
    
  });
});
