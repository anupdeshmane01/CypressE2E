import loginUtils, { performLogin } from "../../support/loginUtils.js";
import { addToCart } from "../../pages/addToCart";
import { login } from "../../pages/loginPage";
import registerData from "../../fixtures/registerData.json";

describe("s", () => {
  it("a", () => {
    cy.route('GET', "/index.php?route=account/account")
    performLogin()
      cy.title().then(title => {
        cy.log(`Page title is: ${title}`);
        // Optionally, add an assertion if needed
        // expect(title).to.equal('Expected Title');
      });
    
    cy.log(cy.title())
    
  });
});

