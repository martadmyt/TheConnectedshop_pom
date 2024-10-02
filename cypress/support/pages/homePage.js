class HomePage{
    
    checkURLHomePage(){
        cy.url() 
        .should('eq', 'https://theconnectedshop.com/')
    }
    checkTitleHomePage(){
        cy.title()
      .should('eq', 'The Connected Shop - Smart Locks, Smart Sensors, Smart Home & Office')
    }
    
}
export default HomePage;