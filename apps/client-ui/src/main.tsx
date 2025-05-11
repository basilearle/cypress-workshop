import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';
import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import App from './app/App';

// Initialize MSW in development mode
async function initMocks() {
  if (process.env.NODE_ENV === 'development') {
    const { worker } = await import('./mocks/browser');

    return worker.start({ onUnhandledRequest: 'bypass' });
  }

  return Promise.resolve();
}

// Start the MSW worker and then render the app
initMocks().then(() => {
  const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
  );
  root.render(
    <StrictMode>
      <MantineProvider>
        <App />
      </MantineProvider>
    </StrictMode>
  );
});
