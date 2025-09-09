import './CartItem.css'
import remove_icon from "../../Assets/Frontend_Assets/cart_cross_icon.png"
import { useContext } from 'react'
import ShopCategory from '../../pages/ShopCategory'
import { ShopContext } from '../../context/ShopContext'

export default function CartItem() {
    const {all_product, cartItems, removeFromCart} = useContext(ShopContext)

    return (
        <div className='cart-item'>
            <div className='cart-item-main'>
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Qunatity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_product.map(product => {
                let productQuantity = cartItems[product.id]
                if(productQuantity > 0) {
                    return (
                        <div key={product.id}>
                            <div className='cart-item-format cart-item-main'>
                                <img src={product.image} alt='' className='cart-item-product-icon'/>
                                <p>{product.name}</p>
                                <p>${product.new_price}</p>
                                <button className='cart-item-quantity'>{productQuantity}</button>
                                <p>${product.new_price * productQuantity}</p>
                                <img 
                                    src={remove_icon} 
                                    alt='' 
                                    onClick={() => removeFromCart(product.id)}
                                    className='cart-item-remove'    
                                />
                            </div>
                            <hr />
                        </div>
                    )
                }
            })}
        </div>
    )
}
