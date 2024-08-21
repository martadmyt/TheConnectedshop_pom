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

}
export default Header;