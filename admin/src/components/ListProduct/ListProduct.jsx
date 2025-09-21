import { useEffect, useState } from 'react'
import './ListProduct.css'
import { fetchAllProducts, removeProducts } from '../../api'
import cross_icon from "../../assets/Admin_Assets/cross_icon.png"

export default function ListProduct() {
    const [allProducts, setAllProducts] = useState([])

    async function getAllProducts() {
        const resData = await fetchAllProducts()

        setAllProducts(resData)
    }

    useEffect(() => {
        getAllProducts()
    }, [])

    // console.log(allProducts)

    async function deleteProduct(id) {
        const resData = await removeProducts(id)

        if(resData.success) {
            alert(`removed product: ${resData.name}`)
            await getAllProducts()
        }
        
    }

    return (
        <div className='list-product'>
            <h1>All Products List</h1>
            <div className='list-product-format-main'>
                <p>Products</p>
                <p>Title</p>
                <p>Old Price</p>
                <p>New Price</p>
                <p>Category</p>
                <p>Remove</p>
            </div>
            <div className='list-product-allproducts'>
                <hr />
                {allProducts.map(product => (
                    <div key={product.id}>
                        <div className='list-product-format-main list-product-format'>
                            <img src={product.image} alt='' className='list-product-image'/>
                            <p>{product.name}</p>
                            <p>{product.old_price}</p>
                            <p>{product.new_price}</p>
                            <p>{product.category}</p>
                            <img 
                                src={cross_icon} 
                                className='list-product-remove-icon' 
                                alt='' 
                                onClick={() => deleteProduct(product.id)}    
                            />
                        </div>
                        <hr />
                    </div>
                ))}
            </div>
        </div>
    )
}
