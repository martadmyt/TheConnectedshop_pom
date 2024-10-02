import ProductPage from "../support/pages/productPage";
import Cart from "../support/pages/cart";

describe('the connected shop', () => { 
    const cart = new Cart();
    const productPage = new ProductPage();
    
    beforeEach(() => { 
        productPage.visit();
            cy.on('uncaught:exception', (err, runnable) => { return false; })
        productPage.ckeckAddToCartButtonClick();
        
      })
      
    it('Check Cart Elements', () => {
        cart.checkMiniCartPopup();
        cart.checkProductinMiniCart();
        cart.checkProductImageInCart();
        cart.checkProductNameInCart();
        cart.checkColorOptionForProductInCart();
        cart.checkProductPriceInCart();
        cart.checkProductCounterInCart();
        cart.checkRemoveButtonInCart();
      })
    
    it('Check clicking the Product Name', () => {
        cart.checkProductNameClick();
    })
    
    it('Check the qty field functionality', () => {
        cart.checkIncreaseButton();
        cart.checkIncreaseButtonClick();
        cart.checkIncreaseButtonClick();
        cart.checkDecreaseButton();
        cart.checkDecreaseButtonClick();
        
    })


    // it('Check the qty field entering', () => {
    //     cart.checkQtyField();
    //     cart.checkQtyFieldClear();
    //     cart.checkQtyFieldClick();
    //     cart.checkQtyFieldType();
    // })

     
    it('Check the remove button click', () => {
        cart.checkRemoveButtonClik();
    }) 
    
    it('Check the Close button click', () => {
        cart.checkCloseButton();
        cart.checkCloseButtonClick();
    })

})