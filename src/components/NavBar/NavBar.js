
import CartWidget from "../CartWidget/CartWidget";
import {NavLink, Link} from 'react-router-dom'
const NavBar = () => {
    return(
        <nav className="NavBarr">
            <Link to = '/'><h3>JuvaLicious</h3></Link>
            
            <div className = "sep"> 
                <NavLink to = {'/'} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Inicio</NavLink>
                <NavLink to = {'/category/productos'} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Productos</NavLink>
                <NavLink to = {'/category/sale'} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Sale</NavLink>
                {/* <button>
                    Inicio
                </button>
                <button>
                    Productos
                </button>
                <button>
                    Sale
                </button> */}
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar;