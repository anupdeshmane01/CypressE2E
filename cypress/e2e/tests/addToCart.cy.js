import loginUtils, { performLogin } from "../../support/loginUtils.js";
import { addToCart } from "../../pages/addToCart";
import { login } from "../../pages/loginPage";
import registerData from "../../fixtures/registerData.json";

describe("function created login", () => {
  it("a", () => {
    performLogin()
    cy.log("Success login")
           });
 });

