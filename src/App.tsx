import React from 'react';
import { Routes, Route, Link, useParams } from "react-router-dom";

import { Layout } from './components/layout';
import Home from './pages/home/home';
import ProductDetail from './pages/products/products';
import RouteNotFound from './pages/notFound';
import Contact from './pages/contact/contact';
import Checkout from './pages/cart/checkout';
import CheckoutSuccess from './pages/cart/checkoutSuccess';


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products/:id" element={<ProductDetail />} />
          <Route path="contact" element={<Contact />} />
          <Route path="cart" element={<Checkout />} />
          <Route path="*" element={<RouteNotFound />} />
        </Route>
      </Routes>
    </div>
  )
}
export default App;
