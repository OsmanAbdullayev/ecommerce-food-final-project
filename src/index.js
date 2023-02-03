import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './routers/AppRouter';
import reportWebVitals from './reportWebVitals';
import { CartProvider } from 'react-use-cart';
// import "./assets/sass/global.scss";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <CartProvider>
   <React.StrictMode>
    <App />
  </React.StrictMode>
 </CartProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
