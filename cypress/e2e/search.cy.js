import Search from "../support/pages/search";
import OpenSite from "../support/pages/openSite";

describe('the connected shop', () => { 
    const openSite = new OpenSite();
    const search = new Search();

beforeEach(() => { 
    openSite.visit();
    cy.on('uncaught:exception', (err, runnable) => { return false; })
})

it('Check Search Link Element', () => {
    search.checkSearchLink();
    search.checkSearchLinkClick();
    search.checkEnteringTextInSearch();
    search.checkSearchQtyTitle();
    search.checkProductCard();
    search.checkProductImage();
    search.checkProductTitle();
    search.checkProductReviewStars();
    search.checkProductReviewText();
    search.checkProductPrice();
    search.checkViewAllButton();
    search.checkEnteringNegativeTextInSearch();
    search.checkNoResultsTitle();
    
    

    

})
})