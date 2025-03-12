import React, { useContext } from 'react';
import { CartContext } from '../CartContext';
import './CartWidget.css';

const CartWidget = () => {
    const { cartItems } = useContext(CartContext); // Access cartItems from CartContext

    return (
        <div className="cart-widget">
            <img className="CartImg" src="./assets/shopping-cart.png" alt="cart-icon" />
            <span className="cart-count"> {cartItems.length}</span>
        </div>
    );
};

export default CartWidget;
