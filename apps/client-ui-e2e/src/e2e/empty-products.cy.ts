describe('no products flow', () => {
  it('should display no-products-fallback when products API returns empty array', () => {
    // Intercept GET /api/products - Return empty array
    cy.intercept('GET', '/api/products', { body: [] })
      .as('getEmptyProducts');

    // Navigate to the products page
    cy.visit('/products');

    // Wait for the API call to complete
    cy.wait('@getEmptyProducts');

    // Verify the no-products-fallback is displayed
    cy.getByTestId('no-products-fallback').should('be.visible');

    // Verify the correct message is displayed
    cy.contains('No Products Available');
    cy.contains('We\'re sorry, but there are currently no products available');
  });
});
