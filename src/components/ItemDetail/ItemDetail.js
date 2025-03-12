import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import { useContext } from 'react';
import { CartContext } from '../CartContext';

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
    const { addToCart } = useContext(CartContext); // Access the CartContext

    const handleAddToCart = (item,quantity) => {
        console.log('Cantidad Agregada ', quantity);
        
        console.log('Detalles del producto', { id, name, img, category, description, price, stock }); 
        console.log('Cantidad a agregar:', quantity); 
        addToCart({ id, name, img, category, description, price, stock }, quantity); 

    };

    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">{name}</h2>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg" />
            </picture>
            <section>
                <p className='Info'>
                    <strong>Categoria:</strong> {category}
                </p>
                <p className='Info'>
                    <strong>Descripcion:</strong> {description}
                </p>
                <p className='Info'>
                    <strong>Precio:</strong> ${price}
                </p>
                <p className='Info'>
                    <strong>Stock disponible:</strong> {stock}
                </p>
            </section>
            <footer className='ItemFooter'>
                <ItemCount initial={1} stock={stock} onAdd={handleAddToCart} />
            </footer>
        </article>
    );
}

export default ItemDetail;
