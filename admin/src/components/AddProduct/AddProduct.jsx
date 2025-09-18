import './AddProduct.css'
import upload_area from "../../assets/Admin_Assets/upload_area.svg"
import { useState } from 'react'
import { addProduct, uploadImage } from '../../api'

export default function AddProduct() {
    const [image, setImage] = useState(null)
    const [productDetails, setProductDetails] = useState({
        name: "",
        image: "",
        category: "women",
        old_price: "",
        new_price: ""
    })

    function handleImage(e) {
        setImage(e.target.files[0])
    }

    function handleProductDetails(e) {
        setProductDetails(prevState => ({...prevState, [e.target.name]: e.target.value}))
    }

    async function handleAddButton() {
        let updatedProductDetails;
        const resData = await uploadImage(image)

        if(resData.success) {
            updatedProductDetails = {...productDetails, image: resData.image_url}
            console.log(updatedProductDetails)
        }

        const addProductResData = await addProduct(updatedProductDetails)
        console.log(addProductResData)
    }

    return (
        <div className='add-product'>
            <div className='add-product-itemfield'>
                <p>Product Title</p>
                <input 
                    type='text' 
                    name='name' 
                    placeholder='Enter Product Name'
                    value={productDetails.name}
                    onChange={handleProductDetails}    
                />
            </div>
            <div className='add-product-price'>
                <div className='add-product-itemfield'>
                    <p>Price</p>
                    <input 
                        type='text' 
                        name='old_price' 
                        placeholder='Enter Old Price'
                        value={productDetails.old_price}
                        onChange={handleProductDetails}    
                    />
                </div>
                <div className='add-product-itemfield'>
                    <p>Offer Price</p>
                    <input 
                        type='text' 
                        name='new_price' 
                        placeholder='Enter New Price'
                        value={productDetails.new_price}
                        onChange={handleProductDetails}    
                    />
                </div>
            </div>
            <div className='add-product-itemfield'>
                <p>Product Category</p>
                <select 
                    name='category' 
                    className='add-product-select'
                    value={productDetails.category}
                    onChange={handleProductDetails}
                >
                    <option value="women">Women</option>
                    <option value="men">Men</option>
                    <option value="kid">Kid</option>
                </select>
            </div>
            <div className='add-product-itemfield'>
                <label htmlFor='file-input'>
                    <img src={image? URL.createObjectURL(image) : upload_area} alt='' className='add-product-thumbnail-image'/>
                </label>
                <input 
                    onChange={handleImage} 
                    type='file' 
                    name='image' 
                    id='file-input' 
                    hidden
                />
            </div>
            <button onClick={handleAddButton} className='add-product-button'>ADD</button>
        </div>
    )
}
