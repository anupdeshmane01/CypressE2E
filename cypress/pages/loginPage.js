export class login {
  webLocators = {
    loginEmail: "#input-email",
    loginPassword: "#input-password",
    loginBtn: 'input[type="submit"]',
  };

  

  loginURL() {
    cy.visit(
      "https://naveenautomationlabs.com/opencart/index.php?route=account/login"
    );
  }
  loginEmail(email) {
    cy.get(this.webLocators.loginEmail).type(email);
  }
  loginPassword(password) {
    cy.get(this.webLocators.loginPassword).type(password);
  }
  loginBtn() {
    cy.get(this.webLocators.loginBtn).click();
  }
}
