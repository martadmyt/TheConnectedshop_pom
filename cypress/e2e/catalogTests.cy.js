import CatalogTests from "../support/pages/catalog";

describe('the connected shop', () => { 
    const catalog = new CatalogTests();

    beforeEach(() => { 
        catalog.visit();
            cy.on('uncaught:exception', (err, runnable) => { return false; })
        
})


  it('Check Cart Elements', () => {
    catalog.checkProductCard();
    catalog.checkProductCard();
    catalog.checkProductTitle();
    catalog.checkProductReviewStars();
    catalog.checkProductReviewText();
    catalog.checkProductPrice();

  })

})