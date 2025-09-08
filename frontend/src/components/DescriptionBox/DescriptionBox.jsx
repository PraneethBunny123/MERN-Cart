import './DescriptionBox.css'

export default function DescriptionBox() {
    return (
        <div className='description-box'>
            <div className='description-box-navigator'>
                <div className='description-box-nav-box'>Description</div>
                <div className='description-box-nav-box fade'>Reviews (122)</div>
            </div>
            <div className='description-box-description'>
                <p>
                    An eCommerce website is an online platform where users can browse, select, and purchase products or services. It typically features product listings, detailed descriptions, images, pricing, and a secure checkout system. The site also includes features like search, filters, user accounts, and payment integration to enhance the shopping experience.
                </p>
            </div>
        </div>
    )
}
