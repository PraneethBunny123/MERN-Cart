import './Navbar.css'

import logo from "../../Assets/Frontend_Assets/logo.png"
import cart_icon from "../../Assets/Frontend_Assets/cart_icon.png"
import { useState } from 'react'
import { Link } from 'react-router-dom'

const CATEGORIES = [
    {
        name: "Shop",
        path: "/"
    },
    {
        name: "Men",
        path: "/mens"
    },
    {
        name: "Women",
        path: "/womens"
    },
    {
        name: "Kids",
        path: "/kids"
    }
]

export default function Navbar() {
    const [category, setCategory] = useState(CATEGORIES[0].name)

    return (
        <div className='navbar'>
            <div className='nav-logo'>
                <img src={logo} alt=''/>
                <p>MERN CART</p>
            </div>
            <ul className='nav-menu'>
                {CATEGORIES.map(cat => (
                    <li 
                        key={cat.name}
                        onClick={() => setCategory(cat.name)}
                    >
                        <Link 
                            to={cat.path}
                            className='link'
                        >
                            {cat.name}
                        </Link> 
                        {category === cat.name && <hr />}
                    </li>
                ))}
            </ul>
            <div className='nav-login-cart'>
                <Link to="/login">
                    <button>Login</button>
                </Link>
                <Link to="/cart">
                    <img src={cart_icon} alt=''/>
                </Link>
                <div className='nav-cart-count'>0</div>
            </div>
        </div>
    )
}
