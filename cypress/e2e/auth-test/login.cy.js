describe("http://127.0.0.1:5500/index.html", () => {
  it("login a user", () => {
    cy.visit("http://127.0.0.1:5500");
    cy.get("form#registerForm div.modal-header button").click({ delay: 500 });
    cy.get('header div.text-end button[data-bs-target="#loginModal"]').click();
    cy.get("input#loginEmail").type("test@noroff.no", { delay: 50 });
    cy.get("input#loginPassword").type("test123123", { delay: 50 });
    cy.get("form#loginForm div.modal-footer button.btn-success").click();
  });
});
