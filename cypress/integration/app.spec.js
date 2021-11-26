describe('main', () => {
  it('should display the correct title', () => {
    cy.visit('http://localhost:3000/')

    cy.get('main > h1').contains(/Welcome to Next.js!/i);
  });
});
