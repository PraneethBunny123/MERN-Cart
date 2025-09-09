import './CartItem.css'
import remove_icon from "../../Assets/Frontend_Assets/cart_cross_icon.png"

export default function CartItem() {
    return (
        <div className='cart-item'>
            <div className='cart-item-main'>
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            <div>
                <div className='cart-item-format'>
                    <img src='' alt='' className='cart-item-product-icon'/>
                    <p></p>
                    <p></p>
                    <button className='cart-item-quantity'></button>
                    <p></p>
                    <img src={remove_icon} alt='' />
                </div>
                <hr />
            </div>
        </div>
    )
}
