import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CartProvider } from './components/CartContext'; // Correct path to CartContext


const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

root.render(
    <CartProvider> {/* Wrap App with CartProvider */}
        <App />
    </CartProvider>
);