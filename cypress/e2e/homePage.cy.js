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
})