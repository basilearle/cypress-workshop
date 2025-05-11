import { useEffect } from 'react';

interface ErrorThrowerProps {
  shouldThrow?: boolean;
  message?: string;
}

/**
 * A component that throws an error when rendered if shouldThrow is true.
 * This is useful for testing error boundaries.
 */
export function ErrorThrower({ shouldThrow = true, message = 'Test error from ErrorThrower component' }: ErrorThrowerProps) {
  useEffect(() => {
    if (shouldThrow) {
      throw new Error(message);
    }
  }, [shouldThrow, message]);

  return <div>This component will throw an error if shouldThrow is true.</div>;
}

export default ErrorThrower;
