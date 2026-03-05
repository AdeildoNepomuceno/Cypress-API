describe('template spec', () => {
  it('passes', () => {
    cy.api('localhost:3000/api/books')
  })
})