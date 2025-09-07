import './ProductDisplay.css'
import star_icon from '../../Assets/Frontend_Assets/star_icon.png'
import star_dull_icon from '../../Assets/Frontend_Assets/star_dull_icon.png'


export default function ProductDisplay({image, name}) {
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
            </div>
        </div>
    )
}
