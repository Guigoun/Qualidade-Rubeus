describe("Validação de bugs nas redes sociais", () => {
  beforeEach(() => {
    cy.visit("https://qualidade.apprbs.com.br/certificacao");
  });

  it("Deve validar o redirecionamento incorreto do ícone youtube para o tiktok", () => {
    //Valida os atributos do link e se está visível
    cy.get("#ifpwp7")
      .should("be.visible")
      .and("have.attr", "href", "https://www.tiktok.com/@rubeusoficial")
      .and("have.attr", "target", "_blank")
      
  });
});
