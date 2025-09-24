import './Navbar.css'

import logo from "../../Assets/Frontend_Assets/logo.png"
import cart_icon from "../../Assets/Frontend_Assets/cart_icon.png"
import nav_dropdown from "../../Assets/Frontend_Assets/nav_dropdown.png"
import { useContext, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../context/ShopContext'

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
    const menuRef = useRef()

    const {getTotalCartItems} = useContext(ShopContext)

    function dropdownToggle(e) {
        menuRef.current.classList.toggle('nav-menu-visible')
        e.target.classList.toggle('open')
    }

    function handleLogout() {
        localStorage.removeItem('auth-token')
        window.location.replace('/')
    }

    return (
        <div className='navbar'>
            <div className='nav-logo'>
                <img src={logo} alt=''/>
                <p>MERN CART</p>
            </div>
            <img className='nav-dropdown' src={nav_dropdown} alt='' onClick={dropdownToggle}/>
            <ul ref={menuRef} className='nav-menu'>
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
                {localStorage.getItem('auth-token') ? (
                    <button onClick={handleLogout}>Logout</button>
                ) : (
                    <Link to="/login">
                        <button>Login</button>
                    </Link>
                )}
                <Link to="/cart">
                    <img src={cart_icon} alt=''/>
                </Link>
                {getTotalCartItems() > 0 && <div className='nav-cart-count'>{getTotalCartItems()}</div>}
            </div>
        </div>
    )
}
