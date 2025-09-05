import './Navbar.css'

import logo from "../../Assets/Frontend_Assets/logo.png"
import cart_icon from "../../Assets/Frontend_Assets/cart_icon.png"

export default function Navbar() {
    return (
        <div className='navbar'>
            <div className='nav-logo'>
                <img src={logo} alt=''/>
                <p>MERN CART</p>
            </div>
            <ul className='nav-menu'>
                <li>Shop <hr /></li>
                <li>Men</li>
                <li>Women</li>
                <li>Kids</li>
            </ul>
            <div className='nav-login-cart'>
                <button>Login</button>
                <img src={cart_icon} alt=''/>
                <div className='nav-cart-count'>0</div>
            </div>
        </div>
    )
}
