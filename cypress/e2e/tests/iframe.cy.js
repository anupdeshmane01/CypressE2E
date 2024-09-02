describe('Iframe Testing',()=>{

    it('Iframe testing',()=>{

        cy.visit('https://practice.expandtesting.com/iframe')
        cy.get('#mce_0_ifr').then(function($iframe){
            let iframebody = $iframe.contents().find('body')
            cy.wrap(iframebody).clear()
            .type('ANUOOOOOOOOOOO')
        })
        
    })

})