describe("http://127.0.0.1:5500/index.html", () => {
  it("login a user then logs it out", () => {
    cy.visit("http://127.0.0.1:5500");
    cy.get("form#registerForm div.modal-header button").click();
    cy.get('header div.text-end button[data-bs-target="#loginModal"]').click();
    cy.get("input#loginEmail").type("e2etest123@stud.noroff.no", { delay: 50 });
    cy.get("input#loginPassword").type("qwerty123456", { delay: 50 });
    cy.get("form#loginForm div.modal-footer button.btn-success").click();
    cy.wait(2000);
    cy.get('button[data-auth="logout"]').click();
  });
});
