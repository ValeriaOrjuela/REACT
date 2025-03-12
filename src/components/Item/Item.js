import ItemCount from "../ItemCount/ItemCount";
import { useContext } from 'react'; 
import { CartContext } from '../CartContext'; 
import { NavLink } from 'react-router-dom'; 

const Item = ({ id, name, img, price, stock }) => {
    const { addToCart } = useContext(CartContext); 


    return (
        <article className='CardItem'>
            <header className='Header'>
                <h2 className='ItemHeader'>{name}</h2>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg" />
            </picture>
            <section>
                <p className='Info'>
                    precio: ${price}
                </p>
                <p className='Info'>
                    Stock disponible: {stock}
                </p>
            </section>
            <section>
                <ItemCount initial={1} stock={stock} onAdd={(quantity) => addToCart({ id, name, img, price }, quantity)} />


            </section>
            <footer className='ItemFooter'>
                <NavLink to={`/item/${id}`} className="Option">Ver detalles</NavLink>
            </footer>
        </article>
    )
}

export default Item;
