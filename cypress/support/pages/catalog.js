class CatalogTests{

    get ProductCard(){
        return '.ProductItem__Wrapper'
    };

    get searchProductiMage(){
        return '.ProductItem__Image'
    };

    get searchProductTitle(){
        return '.ProductItem__Title'
    };

    get searchProductReviewStars(){
        return '.jdgm-prev-badge__stars'
    };

    get searchProductReviewText(){
        return '.jdgm-prev-badge__text'
    };

    get searchProductPrice(){
        return '.ProductItem__PriceList'
    };

    //Open Category Page
    visit(){
        cy.visit('https://theconnectedshop.com/collections/smart-locks')
       }
    
    //Testing Product Cart
    checkProductCard(){
        cy.get(this.ProductCard)
          .should('exist')
          .and('be.visible');
    }

    //Testing product image
    checkProductImage(){
        cy.get(this.searchProductiMage)
          .should('exist')
          .and('be.visible');
    }

    //Testing Product Name 
    checkProductTitle(){
        cy.get(this.searchProductTitle)
          .first()
          .find('a')
          .should('exist')
          .and('be.visible')
          .and('have.attr', 'href');
    }

    //Testing the review stars
    checkProductReviewStars(){
        cy.get(this.searchProductReviewStars)
          .first()
          .should('exist')
          .and('be.visible')
          .and('have.attr', 'role', 'button')
    }

    //Testing the review test near stars
    checkProductReviewText(){
        cy.get(this.searchProductReviewText)
          .first()
          .should('exist')
          .and('be.visible')
    }

    //Testing product price
    checkProductPrice(){
        cy.get(this.searchProductPrice)
          .first()
          .should('exist')
          .and('be.visible')
    }

}

export default CatalogTests;