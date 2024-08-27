import { login } from "../../pages/loginPage";
import registerData from "../../fixtures/registerData.json";

const Login = new login();

describe("Login Test", () => {
  it("Login Success 1", () => {
    Login.loginURL();
    Login.loginEmail(registerData.login.username,{delay : 0});
    Login.loginPassword(registerData.login.password1,{delay : 0});
    Login.loginBtn();
  });
  
});
