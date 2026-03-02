describe("Validação de bugs nas redes sociais", () => {
  beforeEach(() => {
    cy.visit("https://qualidade.apprbs.com.br/certificacao");
  });

  it("Deve validar o redirecionamento incorreto do ícone youtube para o tiktok", () => {
    //Valida se o ícone está visível e clicável
    cy.get("#ifpwp7")
      .invoke("removeAttr", "target")
      .should("be.visible")
      .and("have.attr", "href", "https://www.tiktok.com/@rubeusoficial")
      .click({ force: false });

  });
});
