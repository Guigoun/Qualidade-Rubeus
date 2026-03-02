describe("Ícones das redes sociais", () => {
  beforeEach(() => {
    cy.visit("https://qualidade.apprbs.com.br/certificacao");
  });

  it("Deve validar o redirecionamento para o facebook", () => {
    //Valida se o ícone está visível e clicável
    cy.get("#io0o4o")
      .invoke("removeAttr", "target")
      .should("be.visible")
      .and("have.attr", "href", "https://www.facebook.com/CanalRubeus")
      .click({ force:false });
  });

  it("Deve validar o redirecionamento para o instagram", () => {
    //Valida se o ícone está visível e clicável
    cy.get("#il7i3x")
      .invoke("removeAttr", "target")
      .should("be.visible")
      .and("have.attr", "href", "https://www.instagram.com/canalrubeus/")
      .click({ force:false });
  });

  it("Deve validar o redirecionamento para o linkedin", () => {
    //Valida se o ícone está visível e clicável
    cy.get("#i2m2tn")
      .invoke("removeAttr", "target")
      .should("be.visible")
      .and("have.attr", "href", "https://www.linkedin.com/company/rubeus/")
      .click({ force:false });
  });

});
