import Search from "../support/pages/search";
import OpenSite from "../support/pages/openSite";
import CatalogTests from "../support/pages/catalog";

describe('the connected shop', () => { 
    const openSite = new OpenSite();
    const search = new Search();
    const catalog = new CatalogTests();

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
    catalog.checkProductCard();
    catalog.checkProductImage();
    catalog.checkProductTitle();
    catalog.checkProductReviewStars();
    catalog.checkProductReviewText();
    catalog.checkProductPrice();
    search.checkViewAllButton();
    search.checkSearchLinkExist();
    search.checkSearchIcon();
    
})

it('Check no results found', () => {
    search.checkSearchLinkClick();
    search.checkEnteringNegativeTextInSearch();
    search.checkNoResultsTitle();
 
})


it('Check elements was not checked', () => {
    search.checkSearchLink();
    search.checkSearchLinkClick();
    search.checkSearchIcon();
    search.checkSearchPlaceholder();
    search.checkEnteringTextInSearch();
    search.checkSearchQtyTitle();
 
})
})