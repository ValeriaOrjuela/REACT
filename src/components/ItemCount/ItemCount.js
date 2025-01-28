import './ItemCount.css'
import { useState } from 'react'

const ItemCount = ({stock, initial, onAdd}) => {
    const [quantity, SetQuantity] = useState(initial)
    const increment = () => {
        if(quantity < stock){
            SetQuantity(quantity +1)
        }
    }
    const decrement = () => {
        if(quantity > 1){
            SetQuantity(quantity -1)
        }
    }
    return(
        <div className = 'Counter'>
            <div className = 'Controls'>
                <button className= 'Boton' onClick={decrement}>-</button>
                <h4 className='Numero'>{quantity}</h4>
                <button className= 'Boton' onClick={increment}>-</button>
            </div>
            <div>
                <button className='Boton' onClick={() => onAdd(quantity)} disabled = {!stock}>Agregar al carrito</button>
            </div>

        </div>
    )
}

export default ItemCount;