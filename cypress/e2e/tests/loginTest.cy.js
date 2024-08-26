import { login } from "../../pages/loginPage";
import registerData from "../../fixtures/registerData.json";

const Login = new login();

describe("Login Test", () => {
  it("Login Success 1", () => {
    Login.loginURL();
    Login.loginEmail(registerData.login.username);
    Login.loginPassword(registerData.login.password1);
    Login.loginBtn();
  });
  it("Login Success 2", () => {
    Login.loginURL();
    Login.loginEmail(registerData.login.username);
    Login.loginPassword(registerData.login.password1);
    Login.loginBtn();
  });
  it("Login Success 3", () => {
    Login.loginURL();
    Login.loginEmail(registerData.login.username);
    Login.loginPassword(registerData.login.password1);
    Login.loginBtn();
  });
  it("Login Success 4", () => {
    Login.loginURL();
    Login.loginEmail(registerData.login.username);
    Login.loginPassword(registerData.login.password1);
    Login.loginBtn();
  });
});
