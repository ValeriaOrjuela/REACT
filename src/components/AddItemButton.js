import React from 'react';

const AddItemButton = ({ onAdd, item }) => {

    return (
        <button onClick={() => onAdd(item)}>

            Add to Cart
        </button>
    );
};

export default AddItemButton;
