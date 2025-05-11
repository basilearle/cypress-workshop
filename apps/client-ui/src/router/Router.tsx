import { BrowserRouter, Route, Routes } from 'react-router';

import Landing from './routes/Landing';
import Products from './routes/Products';
import Confirmation from './routes/Confirmation';

export function AppRouter() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/products" element={<Products />} />
        <Route path="/confirmation" element={<Confirmation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
