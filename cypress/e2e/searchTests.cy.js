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
   // search.checkSearchLink();
    search.checkSearchLink1()
          .should('be.visible');
    search.checkSearchPlaceholder();
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
    search.checkSearchLinkExist();
    search.checkSearchIcon();
    
})

it('Check no results found', () => {
    search.checkSearchLinkClick();
    search.checkEnteringNegativeTextInSearch();
    search.checkNoResultsTitle();
 
})
})