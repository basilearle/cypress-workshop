describe('sanity flow', () => {

  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    cy.contains('h1', 'Welcome');
  });
});
