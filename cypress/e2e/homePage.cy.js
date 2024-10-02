import Header from "../support/pages/header";
import HomePage from "../support/pages/homePage";
import OpenSite from "../support/pages/openSite"

describe('the connected shop', () => { 
    const openSite = new OpenSite();
    const homePage = new HomePage();
    const header = new Header();
  beforeEach(() => { 
    openSite.visit();
    cy.on('uncaught:exception', (err, runnable) => { return false; })
  })
  
  it('Check Home Page and Header elements', () => {
     homePage.checkURLHomePage();
     homePage.checkTitleHomePage();
     header.checkHeaderExisted();
     header.checkLogoTransparent();
     header.checkLogoPrimary();
     header.checkLogoUrl();
     header.checkMenu();
     header.checkMenuItems();
     header.checkAccountSearchCart();
    

  })
})