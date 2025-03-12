import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [products, setProducts] = useState([]); 

    const addToCart = (item, quantity) => {
        console.log(`Agregando ${quantity} de ${item.name} al carrito.`); 
        console.log('Cantidad agregada al carrito:', quantity); 
        if (quantity) {
            const newCartItems = [...cartItems, { ...item, quantity }];
            setCartItems(newCartItems);
            console.log('cantidad en carrito ahora:', newCartItems); 
            // Update stock
            setProducts((prevProducts) => 
                prevProducts.map(product => 
                    product.id === item.id ? { ...product, stock: product.stock - quantity } : product
                )
            );
        } else {
            console.error('Quantity is undefined or zero');
        }
    };

    const removeFromCart = (id) => {
        setCartItems((prevItems) => prevItems.filter(item => item.id !== id));
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, products }}>
            {children}
        </CartContext.Provider>
    );
};
