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

    //Valida se os campos nome, telefone e e-mail estão visíveis,habilitados e os preenche com dados inválidos
    cy.get('input[name="pessoa.nome"]')
      .should("be.visible")
      .type("FHODIF~323RF-2-934293FWEDJ");

    cy.get('input[name="pessoa.telefonePrincipal"]')
      .should("not.be.disabled")
      .type("12382174071302389840911089812098092");

    cy.get('input[name="pessoa.emailPrincipal"]')
      .should("not.be.disabled")
      .type("vajdq3kn1çrfsjaai9@@fa0ai0");
      
    //Verifica se exibe a mensagem de erro de preenchimento dos campos telefone e e-mail é exibida na tela
    cy.contains("Preencha este campo").should("be.visible");
  });
});
