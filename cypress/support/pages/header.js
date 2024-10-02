class Header{

    checkHeaderExisted(){
    cy.get('.Header__Wrapper')
      .should('exist')
      .and('be.visible');
}
    checkLogoTransparent(){
    cy.get('.Header__LogoImage--transparent')
      .should('exist')
      .and('be.visible')
      .and('have.attr', 'src', '//theconnectedshop.com/cdn/shop/files/The_Connected_Shop_logo_250x.png?v=1705959163')
      .and('have.attr', 'alt', 'The Connected Shop Logo White');
    }
   
    checkLogoPrimary(){
    cy.get('.Header__LogoImage--primary')
      .should('exist')
      .and('have.attr', 'src', '//theconnectedshop.com/cdn/shop/files/The_Connected_Shop_250x.png?v=1705959137')
      .and('have.attr', 'alt', 'The Connected Shop Logo');
    }

    checkLogoUrl(){
    cy.get('.Header__LogoLink')
      .should('have.attr', 'href', '/');
    }

    checkMenu(){
    cy.get('.Header__MainNav > .HorizontalList')
      .should('exist')
      .and('be.visible');
    }

    checkMenuItems(){
    cy.get('.Header__MainNav') 
      .should('be.visible') 
      .within(() => { 

        cy.contains('Home')
          .should('exist')
          .and('have.attr', 'href', '/')

        cy.contains('New In')
          .should('exist') 
          .and('have.attr', 'href', '/collections/new-in')

        cy.contains('Collections')
          .should('exist')
          .and('have.attr', 'href', '/pages/products')
          .and('have.text', 'Collections')

        cy.contains('Personal')
          .should('exist')
          .and('have.attr', 'href', '/pages/personal') 

        cy.contains('Businesses')
          .should('exist')
          .and('have.attr', 'href', '/pages/businesses')

        cy.contains('Tech Talk')
          .should('exist')
          .and('have.attr', 'href', '/blogs/tech-talk') 

        cy.contains('About us')
          .should('exist')
          .and('have.attr', 'href', '/pages/about-us') 

        cy.contains('Contact')
          .should('exist')
          .and('have.attr', 'href', '/pages/contact-us') 
          
        cy.contains('📞 Call')
          .should('exist')
          .and('have.attr', 'href', 'tel:3053303424') });
    }
    
    checkAccountSearchCart(){
        cy.get('.Header__SecondaryNav')
        .should('be.visible') 
        .within(() => { 
            cy.contains('Account')
            .should('exist')
            .and('have.attr', 'href', '/account') 
            
          cy.contains('Search')
            .should('exist')
            .and('have.attr', 'href', '/search') 
            
          cy.contains('Cart (0)')
            .should('exist')
            .and('have.attr', 'href', '/cart')
          
            cy.get('.Header__CartCount')
              .should('exist'); });
    }

    
}

export default Header;