/// <reference types="cypress" />

describe('Task2', () => {
    beforeEach(() => {
     
      cy.visit('https://magento.softwaretestingboard.com/')
    })
  
  
    it('Validate if the Added Product can be edited', () => {
      cy.get('.logo').should('be.visible')
      cy.get('#search').should('be.visible').type('Shirt{enter}')
      cy.get('.product-item-info').eq(0).click()
      cy.get('.page-title-wrapper').should('contain', 'Radiant Tee')
      cy.get('#option-label-size-143-item-166').click()
      cy.get('#option-label-color-93-item-50').click()
      cy.get('#product-addtocart-button').click()
      cy.contains('You added Radiant Tee to your').should('be.visible')
      cy.get('.showcart').click()
      cy.get('div.primary a.action.edit').click()
      cy.get('.page-title-wrapper').should('contain', 'Radiant Tee')
      cy.get('#product-updatecart-button').should('be.visible').click()
      cy.contains('Radiant Tee was updated in your shopping cart.').should('be.visible')
      })
    
      it('validate that the user can submit a review on theproduct page', () => {
         cy.get('.logo').should('be.visible')
         cy.get('#search').should('be.visible').type('Shirt{enter}')
         cy.get('.product-item-info').eq(0).click()
         cy.get('.page-title-wrapper').should('contain', 'Radiant Tee')
         cy.get('.view').click()
         cy.get('.review-legend').should('contain', 'reviewing')
         cy.get('input[name="ratings[4]"]').eq(1).check({ force: true }); 
         cy.get('#nickname_field').type('AhMad Aslan')
         cy.get('#summary_field').type('AhMad Aslan')
         cy.get('#review_field').type('AhMad Aslan')
         cy.get('.actions-primary').click()
         cy.wait(3000)
         cy.contains('You submitted your review for moderation.').should('be.visible')

         
         })
  })
  