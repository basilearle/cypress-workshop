describe('Error Handling', () => {
  it('should display error page when navigating to confirmation without productId', () => {
    // Navigate directly to the confirmation page without a productId
    cy.visit('/confirmation');

    // Verify we're redirected to the error page
    cy.url().should('include', '/error');

    // Verify the error page is displayed correctly
    cy.contains('h1', 'Error');
    // Verify the error icon is present (using ThemeIcon which contains the alert triangle)
    cy.get('.mantine-ThemeIcon-root').should('exist');

    // Verify the correct error message is displayed
    cy.contains('No product selected');

    // Verify the return to home button is present
    cy.contains('button', 'Return to Home');

    // Verify the return to home button works
    cy.contains('button', 'Return to Home').click();
    cy.url().should('eq', Cypress.config().baseUrl + '/');
  });
});
