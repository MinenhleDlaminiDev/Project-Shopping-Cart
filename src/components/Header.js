import { Link, NavLink } from "react-router-dom";
import '../App.css';

const Header = () => {
    return ( 
        <header>
            <Link to="/" className="logo">
                <img src="https://w7.pngwing.com/pngs/833/426/png-transparent-shopping-cart-icon-shopping-cart-black-design-trade-thumbnail.png" alt="Shopping Cart" />
                <span>Shopping Cart</span>
            </Link>
            <nav className="navigation">
                <NavLink to="/" className="link">Home</NavLink>
                <NavLink to="/cart" className="link">Cart</NavLink>
            </nav>
            <Link to="/cart" className="items"> 
                <span>Cart: 2</span>
            </Link>
        </header>
     );
}
 
export default Header;