export class addToCart{

weblocators={

    addToCart: "#button-cart",
    cart:".btn-inverse",
    viewCart: 'p.text-right > a[href*="route=checkout/cart"]',
    checkout: 'p.text-right > a[href*="route=checkout/checkout"]',
    clearCart: ":nth-child(5) > .btn"

}
addToCart(){
    cy.get(this.weblocators.addToCart).click()
}
cart(){
    cy.get(this.weblocators.cart).click()
}
viewCart(){
    cy.get(this.weblocators.viewCart).click()
}
checkout(){
    cy.get(this.weblocators.checkout).click()
}
clearCart(){
    cy.get(this.weblocators.clearCart).click()
}
}