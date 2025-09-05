import './Navbar.css'

import logo from "../../Assets/Frontend_Assets/logo.png"
import cart_icon from "../../Assets/Frontend_Assets/cart_icon.png"
import { useState } from 'react'

const CATEGORIES = ["Shop", "Men", "Women", "Kids"]

export default function Navbar() {
    const [category, setCategory] = useState(CATEGORIES[0])

    return (
        <div className='navbar'>
            <div className='nav-logo'>
                <img src={logo} alt=''/>
                <p>MERN CART</p>
            </div>
            <ul className='nav-menu'>
                {CATEGORIES.map(cat => (
                    <li 
                        key={cat}
                        onClick={() => setCategory(cat)}
                    >
                        {cat} 
                        {category === cat && <hr />}
                    </li>
                ))}
            </ul>
            <div className='nav-login-cart'>
                <button>Login</button>
                <img src={cart_icon} alt=''/>
                <div className='nav-cart-count'>0</div>
            </div>
        </div>
    )
}
