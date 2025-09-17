import './AddProduct.css'
import upload_area from "../../assets/Admin_Assets/upload_area.svg"

export default function AddProduct() {
    return (
        <div className='add-product'>
            <div className='add-product-name'>
                <p>Product Title</p>
                <input type='text' name='name' placeholder='Enter Product Name'/>
            </div>
            <div className='add-product-itemfield'>
                <p>Price</p>
                <input type='text' name='old_price' placeholder='Enter Old Price'/>
            </div>
            <div className='add-product-itemfield'>
                <p>Offer Price</p>
                <input type='text' name='new_price' placeholder='Enter New Price'/>
            </div>
            <div className='add-product-itemfield'>
                <p>Product Category</p>
                <select name='category' className='add-product-select'>
                    <option value="women">Women</option>
                    <option value="men">Men</option>
                    <option value="kid">Kid</option>
                </select>
            </div>
            <div className='add-product-itemfield'>
                <label htmlFor='file-input'>
                    <img src={upload_area} alt='' className='add-product-thumbnail-image'/>
                </label>
                <input type='file' name='image' id='file-input' hidden/>
            </div>
            <button className='add-product-button'>ADD</button>
        </div>
    )
}
