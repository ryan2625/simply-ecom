import React from 'react';
import ReactDOM from 'react-dom/client';
import { CartProvider } from './contexts/cartContext';
import { CategoryProvider } from './contexts/categoryContext';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartProvider>
      <CategoryProvider>
        <App />
      </CategoryProvider>
    </CartProvider>
  </React.StrictMode>
);
