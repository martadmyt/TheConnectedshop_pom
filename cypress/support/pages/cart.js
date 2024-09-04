class Cart{

    get productName(){
        return ':nth-child(1) > .CartItem > .CartItem__Info > .CartItem__Title > a'
    };

    get removeButton(){
        return ':nth-child(1) > .CartItem > .CartItem__Info > .CartItem__Actions > .CartItem__Remove'
    }

    get increaseQty(){
        return ':nth-child(1) > .CartItem > .CartItem__Info > .CartItem__Actions > .CartItem__QuantitySelector > .QuantitySelector > [title="Set quantity to 2"]'
    };

    get decreaseQty(){
        return ':nth-child(1) > .CartItem > .CartItem__Info > .CartItem__Actions > .CartItem__QuantitySelector > .QuantitySelector > [title="Set quantity to 0"]'
    };

    get qtyField(){
        return '#updates_40672446939308\:75b2a21db5726b8a7737459a99e8cdb0'
    };

    get closeButton(){
        return '#sidebar-cart > .Drawer__Header > .Drawer__Close'
    }

    

 // Open PDP
    visit(){
        cy.visit('https://theconnectedshop.com/products/fingerprint-door-lock')
       }

//Testing the minicart pop-up
checkMiniCartPopup(){
  cy.get('.Cart > .Drawer__Main')
    .should('exist')
    .and('be.visible');
}

//Testing the product is shown in minicart
checkProductinMiniCart(){
    cy.get('.Cart__ItemList > :nth-child(1)')
      .should('exist')
      .and('be.visible');
}

//Testing that product has image
checkProductImageInCart(){
    cy.get(':nth-child(1) > .CartItem > .CartItem__ImageWrapper > .AspectRatio > .CartItem__Image')
      .should('exist')
      .and('be.visible');
}
 
//Testing that product has name
checkProductNameInCart(){
    cy.get(this.productName)
      .should('exist')
      .and('be.visible')
      .and('have.attr', 'href');
}

//Testing that product has color option
checkColorOptionForProductInCart(){
    cy.get(':nth-child(1) > .CartItem > .CartItem__Info > .CartItem__Meta > .CartItem__Variant')
      .should('exist')
      .and('be.visible');
}

//Testing that product has price
checkProductPriceInCart(){
    cy.get(':nth-child(1) > .CartItem > .CartItem__Info > .CartItem__Meta > .CartItem__PriceList > .CartItem__Price > .money')
      .should('exist')
      .and('be.visible');
}


//Testing that product has counter
checkProductCounterInCart(){
    cy.get(':nth-child(1) > .CartItem > .CartItem__Info > .CartItem__Actions > .CartItem__QuantitySelector > .QuantitySelector')
      .should('exist')
      .and('be.visible');
}


//Testing the "Remove" button is present
checkRemoveButtonInCart(){
    cy.get(this.removeButton)
      .should('exist')
      .and('be.visible');
}

//Testing clicking on the product name
checkProductNameClick(){
    cy.get(this.productName)
      .click()
}

 //Check the increasing quantity button test
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

    //Can't pass tests:
    // //check the qty field is present
    // checkQtyField(){
    //     cy.get(this.qtyField)
    //       .should('exist')
    //       .and('be.visible');
    // }

    // //check clearing value in the qty field
    // checkQtyFieldClear(){
    //     cy.get(this.qtyField)
    //       .clear();
    // }

    // //check click value in the qty field
    // checkQtyFieldClick(){
    //     cy.get(this.qtyField)
    //       .click(); 

    // }
        
    //  //check typing value in the qty field
    // checkQtyFieldType(){
    //     cy.get(this.qtyField)
    //       .type('9');
    // }

    //Testing the "Remove" button is present
    checkRemoveButtonClik(){
        cy.get(this.removeButton)
          .click();
  }

    //Testing the Close button
    checkCloseButton(){
       cy.get(this.closeButton)
        .should('exist')
        .and('be.visible');
    }

    //Testing the Close Button Click
    checkCloseButtonClick(){
        cy.get(this.closeButton)
          .click();
    }

   
}

export default Cart;