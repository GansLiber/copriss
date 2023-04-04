describe('template spec', () => {
  it('passes', () => {
    cy.visit("https://makelovepizza.ru/tomsk/cafe"); 
    cy.get('.cafe-row1 > a').click()
    cy.get(':nth-child(12) > .cafe-toggle-link').click()
    cy.scrollTo(0,4500)
    cy.get(':nth-child(17) > .cafe-toggle-link').click()
  })
})