export class registerPage {
  webLocators = {
    firstName: "#input-firstname",
    lastName: "#input-lastname",
    email: "#input-email",
    telephone: "#input-telephone",
    password: "#input-password",
    confirmPassword: "#input-confirm",
    policyCheckbox: 'input[type="checkbox"]',
    continue: 'input[type="submit"]',
    alert: ".alert",
  };
  openUrl() {
    cy.visit(Cypress.env("URL"));
  }
  enterFirstName(Fname) {
    cy.get(this.webLocators.firstName).type(Fname, { delay: 0 });
  }
  enterLastName(Lname) {
    cy.get(this.webLocators.lastName).type(Lname, { delay: 0 });
  }
  enterEmail(email) {
    cy.get(this.webLocators.email).type(email, { delay: 0 });
  }
  enterTelephone(telnum) {
    cy.get(this.webLocators.telephone).type(telnum, { delay: 0 });
  }
  enterPassword(password) {
    cy.get(this.webLocators.password).type(password, { delay: 0 });
    cy.get(this.webLocators.confirmPassword).type(password, { delay: 0 });
  }
  enterPassword(password) {
    cy.get(this.webLocators.password).type(password, { delay: 0 });
    cy.get(this.webLocators.confirmPassword).type(password, { delay: 0 });
  }
  checkBox() {
    cy.get(this.webLocators.policyCheckbox).check();
  }

  clickOnContinue() {
    cy.get(this.webLocators.continue).click();
  }

  successUrl() {
    cy.url().should(
      "eq",
      "https://naveenautomationlabs.com/opencart/index.php?route=account/success"
    );
  }
}
