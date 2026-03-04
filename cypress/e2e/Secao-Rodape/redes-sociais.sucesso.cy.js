describe("Ícones das redes sociais", () => {
  beforeEach(() => {
    cy.visit("https://qualidade.apprbs.com.br/certificacao");
  });

  it("Deve validar o redirecionamento para o facebook", () => {
    //Valida os atributos do link e se está visível
    cy.get("#io0o4o")
      .should("be.visible")
      .and("have.attr", "href", "https://www.facebook.com/CanalRubeus")
      .and("have.attr", "target", "_blank")
  });

  it("Deve validar o redirecionamento para o instagram", () => {
    //Valida os atributos do link e se está visível
    cy.get("#il7i3x")
      .should("be.visible")
      .and("have.attr", "href", "https://www.instagram.com/canalrubeus/")
      .and("have.attr", "target", "_blank")
  });

  it("Deve validar o redirecionamento para o linkedin", () => {
    //Valida os atributos do link e se está visível
    cy.get("#i2m2tn")
      .should("be.visible")
      .and("have.attr", "href", "https://www.linkedin.com/company/rubeus/")
      .and("have.attr", "target", "_blank")
  });

});
