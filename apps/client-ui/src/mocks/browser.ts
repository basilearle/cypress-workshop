import { setupWorker } from 'msw/browser';
import { handlers } from './handlers';

// This configures a Service Worker with the given request handlers
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
export const worker = setupWorker(...handlers);
