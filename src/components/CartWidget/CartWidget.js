import cart from './assets/shopping-cart.png'
import './CartWidget.css'
const CartWidget = () => {
    return(
        <div>
            <img src= {cart} alt="Carrito_compras" className='CartImg'/>
            0
        </div>
        
    )
}
export default CartWidget