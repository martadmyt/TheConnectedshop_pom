class Search{
    
    get searchLinkElement(){
        return 'Search'
    };
    
    get searchInput(){
        return '.Search__Input'
    };

    get searchQtyTitle(){
        return ':nth-child(1) > .Segment > .Segment__Title > .Text--subdued'
    };

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

    get searchViewAllButton(){
        return ':nth-child(1) > .Segment > .Segment__Title > .Link'
    };

    get searchNoResultsTitle(){
        return ':nth-child(1) > .Segment > .Segment__Content > p'
    };

    
    checkSearchLink(){
        cy.contains(this.searchLinkElement)
           .should('exist')
           .and('have.attr', 'href', '/search')
           .and('be.visible');
           return this;
       }

       checkSearchLink1(){
        return cy.contains(this.searchLinkElement);
           
       }
   
    checkSearchLinkClick(){
        cy.contains(this.searchLinkElement) 
          .click()
       }

    checkSearchIcon(){
        cy.get('.Search__InputIconWrapper > .hidden-phone')
        .should('be.visible')
        .and('exist');
    }

    checkSearchPlaceholder(){
        cy.get(this.searchInput)
        .should('have.attr', 'placeholder', 'Search...')
        .and('have.attr', 'type', 'search')
    }

    checkEnteringTextInSearch(){
        cy.get(this.searchInput)
          .type('Smart Padlock Bluetooth')
          .should('have.value', 'Smart Padlock Bluetooth')
       }

    checkSearchQtyTitle(){
       cy.get(this.searchQtyTitle)
       .should('exist')
    }

    checkProductCard(){
        cy.get(this.ProductCard)
          .should('exist')
          .and('be.visible');
    }

    checkProductImage(){
        cy.get(this.searchProductiMage)
          .should('exist')
          .and('be.visible');
    }

    checkProductTitle(){
        cy.get(this.searchProductTitle)
          .first()
          .find('a')
          .should('exist')
          .and('be.visible')
          .and('have.attr', 'href');
    }

    checkProductReviewStars(){
        cy.get(this.searchProductReviewStars)
          .first()
          .should('exist')
          .and('be.visible')
          .and('have.attr', 'role', 'button')
    }

    checkProductReviewText(){
        cy.get(this.searchProductReviewText)
          .first()
          .should('exist')
          .and('be.visible')
    }

    checkProductPrice(){
        cy.get(this.searchProductPrice)
          .first()
          .should('exist')
          .and('be.visible')
    }

    checkViewAllButton(){
        cy.get(this.searchViewAllButton)
          .should('exist')
          .and('be.visible') 
          .and('have.attr', 'href') 
    }

    checkSearchLink(){
        cy.contains(this.searchLinkElement)
           .should('exist')
           .and('be.visible')
       }

    checkSearchLinkExist(){
        cy.contains(this.searchLinkElement)
          .should('have.attr', 'href', '/search') 
          
       }

    checkSearchLinkClick(){
        cy.contains(this.searchLinkElement)
          .click()
       }

    checkEnteringNegativeTextInSearch(){
        cy.get(this.searchInput)
          .type('qwertyuiop')  
       }

    checkNoResultsTitle(){
        cy.get(this.searchNoResultsTitle)
          .should('exist')
          .and('contain', 'No results could be found')
    } 
}

export default Search;