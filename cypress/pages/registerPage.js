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
  };
  openUrl() {
    cy.visit(Cypress.env("URL"));
  }
  enterFirstName(Fname) {
    cy.get(this.webLocators.firstName).type(Fname);
  }
  enterLastName(Lname) {
    cy.get(this.webLocators.lastName).type(Lname);
  }
  enterEmail(email) {
    cy.get(this.webLocators.email).type(email);
  }
  enterTelephone(telnum) {
    cy.get(this.webLocators.telephone).type(telnum);
  }
  enterPassword(password) {
    cy.get(this.webLocators.password).type(password);
    cy.get(this.webLocators.confirmPassword).type(password);
  }
  enterPassword(password) {
    cy.get(this.webLocators.password).type(password);
    cy.get(this.webLocators.confirmPassword).type(password);
  }
  checkBox() {
    cy.get(this.webLocators.policyCheckbox).check();
  }

  clickOnContinue() {
    cy.get(this.webLocators.continue).click();
  }
}
