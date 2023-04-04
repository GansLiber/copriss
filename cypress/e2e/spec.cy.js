describe("template spec", () => {
  it("passes", () => {
    cy.visit("https://makelovepizza.ru/tomsk");
    cy.get(":nth-child(2) > .nav-item-link > .nav-item-title").click();
    cy.get(
      '.product-block-pizza > .product-grid > :nth-child(1) > .product-controls > :nth-child(1) > .product-cart > [role="cart-add"]'
    ).click();
    cy.get(
      ':nth-child(1) > .product-controls > :nth-child(3) > .product-cart > [role="cart-add"]'
    ).click();
    cy.get(".header-cart-button-total").click();
    cy.get(
      '[data-id="2408"] > .cart-product-controls > .product-value > .product-cart > .product-cart-remove'
    ).click();
    cy.wait(1000);
    cy.get(
      '.cart-product-controls > .product-value > .product-cart > [role="cart-add"]'
    ).click();
    cy.get('.header-cart-close').click();
    cy.scrollTo(0, 15500)
    cy.get('.product-block-soup > .product-grid > :nth-child(3) > .product-controls > .product-value > .product-cart > [role="cart-add"]').click()
    cy.get('.product-block-drink > .product-grid > :nth-child(4) > .product-controls > .product-value > .product-cart > [role="cart-add"]').click()
    cy.get('.header-cart-button-total > span').click()
    cy.get('.header-cart-controls-button').click()
    cy.get('[role="login-form"] > .order-submit-small').click()
    cy.get('.btn-close').click()
    cy.get('.header-cart-close').click()
    
    cy.get('.filter-button').click()
    cy.get('[data-select="pickup"]').click()
    cy.get('.modal-footer > [style=""]').click()
    cy.get('.header-nav > :nth-child(2) > .nav-item-link > span')
  });
});
