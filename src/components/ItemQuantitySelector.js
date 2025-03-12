import React, { useState } from 'react';

const ItemQuantitySelector = ({ stock, onQuantityChange }) => {
    const [quantity, setQuantity] = useState(1);

    const handleIncrease = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1);
            onQuantityChange(quantity + 1);
        }
    };

    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
            onQuantityChange(quantity - 1);
        }
    };

    return (
        <div>
            <button onClick={handleDecrease}>-</button>
            <span>{quantity}</span>
            <button onClick={handleIncrease}>+</button>
        </div>
    );
};

export default ItemQuantitySelector;
