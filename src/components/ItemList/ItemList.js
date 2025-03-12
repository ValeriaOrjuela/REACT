import './ItemList.css'
import Item from '../Item/Item'
import { useContext } from 'react';
import { CartContext } from '../CartContext';

const ItemList = ({ products }) => {
    const { addToCart } = useContext(CartContext);

    return(
        <div className='ListGroup'>
            {products.map(prod => (
                <Item key={prod.id} {...prod} onAdd={(quantity) => addToCart({ ...prod, quantity })} />
            ))}

        </div>
    )
}
export default ItemList
