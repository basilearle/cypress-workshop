import { BrowserRouter, Route, Routes } from 'react-router';

import Landing from './routes/Landing';
import Products from './routes/Products';
import Confirmation from './routes/Confirmation';
import Error from './routes/Error';
import ErrorBoundary from '../components/ErrorBoundary';

export function AppRouter() {

  return (
    <BrowserRouter>
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/products" element={<Products />} />
          <Route path="/confirmation" element={<Confirmation />} />
          <Route path="/error" element={<Error />} />
        </Routes>
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default AppRouter;
