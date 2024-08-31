class ProductPage {
    
    get reviewStars(){
        return '.ProductMeta > .jdgm-widget > .jdgm-prev-badge > .jdgm-prev-badge__stars'
    };

    get colorOption(){
        return ':nth-child(1) > .ProductForm__Item'
    };
    
    get increaseQty(){
        return '[data-action="increase-quantity"]'
    };

    get decreaseQty(){
        return '[data-action="decrease-quantity"]'
    };
    
    get qtyField(){
        return '.QuantitySelector__CurrentQuantity'
    };
    
    get addToCartButton(){
        return '.ProductForm__AddToCart'
    };



    // Open PDP
    visit(){
        cy.visit('https://theconnectedshop.com/products/fingerprint-door-lock')
       }
   
    //Check the Product Page opening
    checkPDPOpening(){
    cy.url() 
      .should('eq', 'https://theconnectedshop.com/products/fingerprint-door-lock')
    }  

    //Check the Product Name
    checkProductNameTitle(){
    cy.get('.ProductMeta__Title')
      .should('exist')
      .and('be.visible'); 
    }

    //Check the Product SKU
    checkProductSKU(){
    cy.get('.ProductMeta__Sku')
      .should('exist')
      .and('be.visible');
    }

     //Check the image gallery
    checkImageGallery(){
     cy.get('.Product__Slideshow')
       .should('exist')
       .and('be.visible');
    }

    //Check media
    checkMedia(){
    cy.get('#Media33976616485105 > .AspectRatio > .Image--fadeIn')
      .should('exist')
      .and('be.visible');
    }

    //Check slider points
    checkSliderPoints(){
    cy.get('.Product__SlideshowNav')
      .should('exist')
      .and('be.visible');
    }
    //Check Product Price
    checkProductPrice(){
    cy.get('.ProductMeta__Price > .money')
      .should('exist')
      .and('be.visible');
    }

    //Check the review text near stars
    checkReviewText(){
    cy.get('.ProductMeta > .jdgm-widget > .jdgm-prev-badge > .jdgm-prev-badge__text')
      .should('exist')
      .and('be.visible');
    }
    
    //Check Review Stars
    checkReviewStars(){
    cy.get(this.reviewStars)
      .should('exist')
      .and('be.visible')
      .and('have.attr', 'role', 'button');
    }
   
    //Check click on the review stars
    checkReviewStarsClick(){
    cy.get(this.reviewStars)
      .click();
    }
   
    //Check color options
    checkColorOprion(){
    cy.get(this.colorOption)
      .should('exist')
      .and('be.visible')
    }
    
    //Check color options Opening
    checkColorOptiionClick(){
    cy.get(this.colorOption)
      .click();
    }
    
    //Check quantity selector
    checkQuantitySelector(){
    cy.get('.QuantitySelector')
      .should('exist')
      .and('be.visible');
    }

    //Check the increasing quantity button
    checkIncreaseButton(){
    cy.get(this.increaseQty)
      .should('exist')
      .and('be.visible');
    }

    //check the increase qty click
    checkIncreaseButtonClick(){
    cy.get(this.increaseQty)
        .click();
    }

    //check the decrease qty button
    checkDecreaseButton(){
    cy.get(this.decreaseQty)
      .should('exist')
      .and('be.visible')
    }

    //check the decrease qty button click
    checkDecreaseButtonClick(){
    cy.get(this.decreaseQty)
      .click();
    }

    //check the qty field is present
    checkQtyField(){
    cy.get(this.qtyField)
      .should('exist')
      .and('be.visible');
    }

    //check clearing value in the qty field
    checkQtyFieldClear(){
    cy.get(this.qtyField)
      .clear();
    }

    // //check typing value in the qty field
    // checkQtyFieldType(){
    // cy.get(this.qtyField)
    //   .type('9');
    // }
 
    //check add to Cart Button
    ckeckAddToCartButton(){
    cy.get(this.addToCartButton)
      .should('exist') 
    }

    //check Add to Cart click
    ckeckAddToCartButtonClick(){
    cy.get(this.addToCartButton)
      .click();
    }

    //check Adding product with 2 qty
    checkIncreaseButtonClick(){
    cy.get(this.increaseQty)
      .click();
    }

    ckeckAddToCartButtonClick(){
    cy.get(this.addToCartButton)
      .click();
    }
}  
   
export default ProductPage;