import { products } from '~/data-fixtures';

describe('happy path flow', () => {

  beforeEach(() => cy.visit('/'));

  it('should complete the happy path flow', () => {
    // Verify we're on the landing page
    cy.contains('h1', 'Welcome');

    // Intercept GET /api/products - Returns all products
    cy.intercept('GET', '/api/products', { body: products })
      .as('getProducts');

    // Navigate to the products page
    cy.contains('a', 'View Products').click();

    cy.wait('@getProducts');

    // Verify we're on the products page
    cy.url().should('include', '/products');
    cy.contains('h1', 'Our Products');

    // Intercept GET /api/products/:id - Returns a single product by ID
    cy.intercept('GET', '/api/products/*', (req) => {
      // Extract the product ID from the URL
      const productId = parseInt(req.url.split('/').pop() || '0', 10);

      // Find the product with the matching ID
      const product = products.find((p) => p.id === productId);

      if (product) {
        req.reply(product);
      } else {
        req.reply({ statusCode: 404 });
      }
    }).as('getProduct');

    // Select the first product (Premium Business Suite)
    cy.contains('.mantine-Card-root', 'Premium Business Suite')
      .within(() => {
        cy.contains('button', 'Select').click();
      });

    cy.wait('@getProduct');

    // Verify we're on the confirmation page
    cy.url().should('include', '/confirmation');
    cy.url().should('include', 'productId=1');
    cy.contains('h1', 'Thank You for Your Selection!');

    // Verify the correct product details are displayed
    cy.contains('h3', 'Premium Business Suite');
    cy.contains('Complete solution for enterprise businesses');
    cy.contains('$999.99');
    cy.contains('Enterprise');
    cy.contains('Advanced Analytics');

    // Verify the return to home button works
    cy.contains('button', 'Return to Home').click();
    cy.url().should('eq', Cypress.config().baseUrl + '/');
  });
});
