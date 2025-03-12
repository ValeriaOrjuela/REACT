import React from 'react';

const Brief = ({ items }) => {
    return (
        <div>
            <h2>Purchase Summary</h2>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        {item.name}: {item.quantity} x ${item.price}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Brief;
