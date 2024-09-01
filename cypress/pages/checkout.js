export class checkout{

    weblocators= {

        firstName: "#input-payment-firstname",
        lastname: "#input-payment-lastname",
        company : "#input-payment-company",
        address1 :"#input-payment-address-1",
        address2: "#input-payment-address-2",
        city: "#input-payment-city",
        postcode: "#input-payment-postcode",
        country: "#input-payment-country",
        state: "#input-payment-zone",
        continueBtn:"#button-payment-address",
        billDetailsContBtn: "#button-payment-address",
        tcCheckBox: '[type="checkbox"]',
        methodCntBtn:"#button-payment-method",
        newAddressReadioBtn:':nth-child(3) > label > input'
    }

    firstName(fname){
        cy.get(this.weblocators.firstName).type(fname)
    }
    lastName(lname){
        cy.get(this.weblocators.lastname).type(lname)
    }
    company(company){
        cy.get(this.weblocators.company).type(company)
    }
    address1(add1){
        cy.get(this.weblocators.address1).type(add1)
    }
    address2(add2){
        cy.get(this.weblocators.address2).type(add2)
    }
    city(city){
        cy.get(this.weblocators.city).type(city)
    }
    postcode(postcode){
        cy.get(this.weblocators.postcode).type(postcode)
    }
    country(country){
        cy.get(this.weblocators.country).select(country)
    }
    state(state){
        cy.get(this.weblocators.state,{timeout:10000}).select('Maharashtra')
    }
    continueBtn(){
        cy.get(this.weblocators.continueBtn).click()
    }
    billContBtn(){
        cy.get(this.weblocators.billDetailsContBtn).click()
    }
    tcCheckBox(){
        cy.get(this.weblocators.tcCheckBox).check()
    }
    methodCntBtn(){
        cy.get(this.weblocators.methodCntBtn).click()
    }
    newAddressReadioBtn(){
        cy.get(this.weblocators.newAddressReadioBtn).check()
    }
    

}