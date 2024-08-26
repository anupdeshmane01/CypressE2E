import { registerPage } from "../../pages/registerPage"
import registerData from "../../fixtures/registerData.json"
 const registerObj = new registerPage()

describe('Test Registeration Form', () => {
  it('Success Registraion', () => {
  
    registerObj.openUrl()
    registerObj.enterFirstName(registerData.Firstname)
    registerObj.enterLastName(registerData.Lastname)
    registerObj.enterEmail(registerData.email)
    registerObj.enterTelephone(registerData.telephone)
    registerObj.enterPassword(registerData.password)
    registerObj.checkBox()
    registerObj.clickOnContinue()


  })
})