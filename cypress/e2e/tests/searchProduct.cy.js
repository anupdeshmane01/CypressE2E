import { login } from "../../pages/loginPage";
import registerData from "../../fixtures/registerData.json";
import { searchproduct } from "../../pages/searchProduct";

let search = new searchproduct();
const Login = new login();

describe("Login and Search Test", () => {
  it("Login and Search for Desktops", () => {
    
    Login.loginURL();
    Login.loginEmail(registerData.login.username, { delay: 0 });
    Login.loginPassword(registerData.login.password1, { delay: 0 });
    Login.loginBtn();
    search.laptops()
    search.allLaptops()
    search.macbook()
  });
});
