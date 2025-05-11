import { Component, ReactNode } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    // Update state so the next render will show the fallback UI
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    // You can log the error to an error reporting service
    console.error('Uncaught error:', error, errorInfo);
  }

  componentDidUpdate(prevProps: ErrorBoundaryProps, prevState: ErrorBoundaryState): void {
    // If we have an error and we didn't have one before, redirect to error page
    if (this.state.hasError && !prevState.hasError) {
      const errorMessage = this.state.error?.message || 'An unexpected error occurred';
      window.location.href = `/error?message=${encodeURIComponent(errorMessage)}`;
    }
  }

  render(): ReactNode {
    if (this.state.hasError) {
      // Return a minimal fallback UI while redirecting
      return <div>Redirecting to error page...</div>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
