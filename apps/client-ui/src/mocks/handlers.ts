import { http, HttpResponse } from 'msw';

import { products } from '~/data-fixtures';

// Define the API handlers
export const handlers = [
  // GET /api/products - Returns all products
  http.get('/api/products', () => {
    return HttpResponse.json(products);
  }),

  // GET /api/products/:id - Returns a single product by ID
  http.get('/api/products/:id', ({ params }) => {
    const { id } = params;
    const product = products.find(p => p.id === Number(id));

    if (!product) {
      return new HttpResponse(null, { status: 404 });
    }

    return HttpResponse.json(product);
  })
];
