describe("Preenchimento do formulário de inscrição", () => {
  beforeEach(() => {
    cy.visit("https://qualidade.apprbs.com.br/certificacao");
  });

  it("Deve preencher o formulário com nome válido", () => {
    // Ignora o erro específico da aplicação
    cy.on("uncaught:exception", (err) => {
      if (err.message.includes("ActionsForm")) {
        return false;
      }
    });

    //Valida se os campos nome, telefone e e-mail estão visíveis, habilitados e os preenche com dados válidos
    cy.get('input[name="pessoa.nome"]')
    .should("be.visible")
    .type("Carol");

    cy.wait(1000);

    cy.get('input[name="pessoa.telefonePrincipal"]')
      .should("not.be.disabled")
      .type("61944237856");

    cy.get('input[name="pessoa.emailPrincipal"]')
      .should("not.be.disabled")
      .type("carol112@gmail.com");
  });
});
