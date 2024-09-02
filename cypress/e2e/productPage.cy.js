//Marta
import ProductPage from "../support/pages/productPage";

describe('the connected shop', () => { 
    const productPage = new ProductPage();
    
        beforeEach(() => { 
         productPage.visit();
            cy.on('uncaught:exception', (err, runnable) => { return false; })
      })
      

      it('Check PDP', () => {
        productPage.checkPDPOpening();
        productPage.checkProductNameTitle();
        productPage.checkProductSKU();
        productPage.checkImageGallery();
        productPage.checkMedia();
        productPage.checkSliderPoints();
        productPage.checkProductPrice();    
    })
       
      it('Check review', () => {
        productPage.checkReviewText();
        productPage.checkReviewStars();
        productPage.checkReviewStarsClick();
     })

      it('Check color option', () => {
        productPage.checkColorOprion();
        productPage.checkColorOptiionClick();
    })

      it('Check qty', () => {
        productPage.checkQuantitySelector();
        productPage.checkIncreaseButton();
        productPage.checkIncreaseButtonClick();
        productPage.checkDecreaseButton();
        productPage.checkDecreaseButtonClick();
        productPage.checkQtyField();
        productPage.checkQtyFieldClear();
        productPage.checkScrolltoTop();
        productPage.checkQtyFieldClick();
        productPage.checkQtyFieldType();
    })

      it('Check Add to Cart', () => {
        productPage.ckeckAddToCartButton();
        productPage.ckeckAddToCartButtonClick();
    })

      it('Check Add to Cart with 2 qty', () => {
        productPage.checkIncreaseButtonClick();
        productPage.ckeckAddToCartButtonClick();
    })
})
