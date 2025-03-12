import CartWidget from "../CartWidget/CartWidget";
import { NavLink, Link } from 'react-router-dom';
import './NavBar.css'; // Import the new CSS for styling

const NavBar = () => {
    return (
        <nav className="NavBarr">
            <Link to='/'><h3>JuvaLicious</h3></Link>
            <div className="sep">
                <NavLink to={'/'} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Inicio</NavLink>
                <NavLink to={'/category/productos'} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Productos</NavLink>
                <NavLink to={'/category/sale'} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Sale</NavLink>
                <NavLink to={'/category/catalogo'} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Catálogo</NavLink>
                <NavLink to={'/item/:id'} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Detalle de producto</NavLink>
            </div>
            <CartWidget />
        </nav>
    );
}

export default NavBar;
