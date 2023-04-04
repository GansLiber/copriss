describe('template spec', () => {
  it('passes', () => {
    cy.visit("https://makelovepizza.ru/tomsk/shop"); 
    cy.get(':nth-child(3) > .product-item > .product-controls > .product-value > .product-cart > [role="cart-add"]').click()
    cy.scrollTo(0,200)
    cy.get(':nth-child(6) > :nth-child(1) > .product-controls > .product-value > .product-cart > [role="cart-add"]').click()
    cy.get(':nth-child(9) > :nth-child(1) > .product-controls > .product-value > .product-cart > [role="cart-add"]').click()
    cy.get(':nth-child(12) > :nth-child(2) > .product-controls > .product-value > .product-cart > [role="cart-add"]').click()
    cy.get(':nth-child(15) > :nth-child(2) > .product-controls > .product-value > .product-cart > [role="cart-add"]').click()
    cy.scrollTo(0,0)
    cy.get('.header-cart-button-total > span').click()
  })
})