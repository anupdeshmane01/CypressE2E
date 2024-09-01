export class searchproduct {
  weblocators = {
    desktop: "Desktops",
    laptops: "Laptops & Notebooks",
  };

  desktops() {
    cy.contains(this.weblocators.desktop).click();
  }
  laptops() {
    cy.contains(this.weblocators.laptops).click();
  }
  allLaptops(){
    cy.get('.open > .dropdown-menu > .see-all').click()
  }
  macbook(){
    cy.get('div.caption >h4 > a[href*="43"]').click()
  }
}
