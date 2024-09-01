import { login } from "../pages/loginPage"; // Corrected path
import registerData from "../fixtures/registerData.json"; // Corrected path
import checkOutData from "../fixtures/checkOutData.json";
import { checkout } from "../pages/checkout";
const checkObj1 = new checkout();
const Login = new login();

export function performLogin() {
  Login.loginURL();
  Login.loginEmail(registerData.login.username, { delay: 0 });
  Login.loginPassword(registerData.login.password1, { delay: 0 });
  Login.loginBtn();
}

export function newAddress() {
  checkObj1.firstName(checkOutData.firstname);
  checkObj1.lastName(checkOutData.lname);
  checkObj1.address1(checkOutData.address1);
  checkObj1.address2(checkOutData.address2);
  checkObj1.city(checkOutData.city);
  checkObj1.postcode(checkOutData.postcode);
  checkObj1.country(checkOutData.country);
  checkObj1.state(checkOutData.state);
  checkObj1.continueBtn();
}
