import { useEffect, useState } from 'react'
import './ListProduct.css'
import { fetchAllProducts } from '../../api'

export default function ListProduct() {
    const [allProducts, setAllProducts] = useState([])

    async function getAllProducts() {
        const resData = await fetchAllProducts()

        setAllProducts(resData)
    }

    useEffect(() => {
        getAllProducts()
    }, [])

    console.log(allProducts)

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
                    <div className='list-product-format-main list-product-format' key={product.id}>
                        {/*  */}
                    </div>
                ))}
            </div>
        </div>
    )
}
