import './ItemDetailContainer.css';
import { useState, useEffect } from 'react';
import { getProductsById } from '../asyncMock';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const { itemId } = useParams();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        getProductsById(itemId)
            .then(response => {
                setProduct(response);
            })
            .catch(error => {
                console.error(error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [itemId]);

    return (
        <div className='ItemDetailContainer'>
            {loading ? <p>Loading...</p> : <ItemDetail {...product} />}
        </div>
    );
}

export default ItemDetailContainer;
