import { registerPage } from "../../pages/registerPage"
import registerData from "../../fixtures/registerData.json"
 const registerObj = new registerPage()
 const randomEmail = `user${Math.floor(Math.random() * 10000)}@yopmail.com`;

describe('Test Registeration Form', () => {
  it('Success Registraion', () => {
  
    registerObj.openUrl()
    registerObj.enterFirstName(registerData.Firstname)
    registerObj.enterLastName(registerData.Lastname)
    registerObj.enterEmail(randomEmail)
    registerObj.enterTelephone(registerData.telephone)
    registerObj.enterPassword(registerData.password)
    registerObj.checkBox()
    registerObj.clickOnContinue()
    registerObj.successUrl()
  


  })
})