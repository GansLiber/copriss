describe('template spec', () => {
  it('passes', () => {
    cy.visit("https://makelovepizza.ru/tomsk/cafe");
    cy.get('.footer-nav > :nth-child(2) > [href="/tomsk/shop"] > span').click()
    cy.wait(500);
    cy.get('.footer-nav > :nth-child(3) > [href="/tomsk/delivery"] > span').click()
    cy.wait(500);
    cy.get('.footer-nav > :nth-child(4) > [href="/tomsk/cafe"] > span').click()
    cy.wait(500);
    cy.get('.footer-nav > :nth-child(5) > [href="/tomsk/action"] > span').click()
    cy.wait(500);
    cy.get('.footer-nav > :nth-child(6) > .nav-item-link > span').click()
    cy.wait(500);
    cy.get('.footer-nav > :nth-child(7) > .nav-item-link > span').click()
  })
})