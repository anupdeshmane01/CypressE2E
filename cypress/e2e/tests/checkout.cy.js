import { newAddress, performLogin } from "../../support/loginUtils"; // Correct relative path
import { checkout } from "../../pages/checkout";
import { searchproduct } from "../../pages/searchProduct";
import { addToCart } from "../../pages/addToCart";
// import checkOutData from "../../fixtures/checkOutData.json"

const checkObj = new checkout();
const searchObj = new searchproduct();
const addCartObj = new addToCart();

describe("Checkout", () => {
  it("checkout", () => {
    performLogin();
    searchObj.laptops();
    searchObj.allLaptops();
    searchObj.macbook();
    addCartObj.addToCart();
    addCartObj.cart();
    addCartObj.clearCart();
    addCartObj.cart();
    addCartObj.checkout();
    if (checkObj.billContBtn) {
      checkObj.newAddressReadioBtn();
      newAddress();
      checkObj.billContBtn();
      checkObj.tcCheckBox();
      checkObj.methodCntBtn();
    } else {
    }
  });
});
