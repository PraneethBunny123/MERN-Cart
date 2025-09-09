import './ProductDisplay.css'
import star_icon from '../../Assets/Frontend_Assets/star_icon.png'
import star_dull_icon from '../../Assets/Frontend_Assets/star_dull_icon.png'
import { useContext } from 'react'
import { ShopContext } from '../../context/ShopContext'
import { useParams } from 'react-router-dom'


export default function ProductDisplay({id, image, name, old_price, new_price}) {
    const {addToCart} = useContext(ShopContext)

    return (
        <div className='product-display'>
            <div className='product-display-left'>
                <div className='product-display-image-list'>
                    <img src={image} alt='' />
                    <img src={image} alt='' />
                    <img src={image} alt='' />
                    <img src={image} alt='' />
                </div>
                <div className='product-display-image'>
                    <img src={image} alt='' className='product-display-image-main'/>
                </div>
            </div>

            <div className='product-display-right'>
                <h1>{name}</h1>
                <div className='product-display-right-star'>
                    <img src={star_icon} alt='' />
                    <img src={star_icon} alt='' />
                    <img src={star_icon} alt='' />
                    <img src={star_icon} alt='' />
                    <img src={star_dull_icon} alt='' />
                    <p>(39)</p>
                </div>
                <div className='product-display-right-prices'>
                    <div className='product-display-right-price-old'>${old_price}</div>
                    <div className='product-display-right-price-new'>${new_price}</div>
                </div>
                <div className='product-display-right-description'>
                    Elegant and versatile women’s blouse crafted from soft, breathable fabric, perfect for both casual outings and office wear.
                </div>
                <div className='product-display-right-size'>
                    <h1>Select Size</h1>
                    <div className='product-display-right-sizes'>
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                    </div>
                </div>
                <button onClick={() => addToCart(id)}>Add to Cart</button>
                <p className='product-display-right-category'>
                    <span>Category: </span>Women, T-Shirt, Crop Top
                </p>
                <p className='product-display-right-category'>
                    <span>Tags: </span>Modren, Casual
                </p>
            </div>
        </div>
    )
}
