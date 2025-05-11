# Error Handling in the Application

This document describes the error handling mechanisms implemented in the application.

## Error Boundary

The application uses a React Error Boundary to catch uncaught errors and redirect to an error page. This provides a better user experience by showing a friendly error message instead of a blank screen or a cryptic error.

### Implementation

The error boundary is implemented in `ErrorBoundary.tsx` and is wrapped around the entire application in `App.tsx`. When an uncaught error occurs anywhere in the application, the error boundary catches it and redirects to the `/error` route with the error message as a query parameter.

```tsx
// App.tsx
import { AppRouter } from '../router';
import ErrorBoundary from '../components/ErrorBoundary';

export function App() {
  return (
    <ErrorBoundary>
      <AppRouter />
    </ErrorBoundary>
  );
}
```

### Error Route

The error route is defined in `Router.tsx` and renders the `Error.tsx` component. The Error component displays a generic error message and provides a button to return to the home page.

```tsx
// Router.tsx
<Route path="/error" element={<Error />} />
```

### Testing the Error Boundary

To test the error boundary, you can use the `ErrorThrower` component which throws an error when rendered. This is useful for verifying that the error boundary is working correctly.

```tsx
import ErrorThrower from '../components/ErrorThrower';

// In a component or route
<ErrorThrower shouldThrow={true} message="Custom error message" />
```

## Best Practices

1. **Always wrap potentially error-prone code in try/catch blocks** when possible to handle errors gracefully.
2. **Use the error boundary as a last resort** for uncaught errors that would otherwise crash the application.
3. **Log errors** to help with debugging and monitoring.
4. **Provide clear error messages** to help users understand what went wrong.
