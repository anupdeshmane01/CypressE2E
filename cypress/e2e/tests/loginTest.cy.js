import { login } from "../../pages/loginPage";
import registerData from "../../fixtures/registerData.json";

const Login = new login();

describe("Login Test", () => {
  it("Login Success", () => {
    Login.loginURL();
    Login.loginEmail(registerData.login.username);
    Login.loginPassword(registerData.login.password1);
    Login.loginBtn();
  });
});
