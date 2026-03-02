describe("Preenchimento do formulário de inscrição", () => {
  beforeEach(() => {

    // Ignora o erro específico da aplicação
    cy.on("uncaught:exception", (err) => {
      if (err.message.includes("ActionsForm")) {
        return false;
      }
    });
    //Acessa o site a ser testado
    cy.visit("https://qualidade.apprbs.com.br/certificacao");
  });

  it("Deve preencher o formulário com dados válidos e exibir mensagem de erro", () => {
    //Valida se os campos nome, telefone, e-mail estão visíveis,habilitados e os preenche com dados válidos
    cy.get('input[name="pessoa.nome"]')
    .should("be.visible")
    .type("Carol");

    cy.wait(1000) 
    cy.get('input[name="pessoa.telefonePrincipal"]')
      .should("be.enabled")
      .type("61944237856");

    cy.get('input[name="pessoa.emailPrincipal"]')
      .should("be.enabled")
      .type("carol112@gmail.com");
    //Clica no botão 'AVANÇAR'
    cy.get("#rbBtnNext").click();
    //Verifica se a menssagem de erro é exibida na tela
    cy.contains("É necessário informar a base legal").should("be.visible");
  });
});
