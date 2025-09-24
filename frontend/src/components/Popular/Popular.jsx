import "./Popular.css"
// import data_product from "../../Assets/Frontend_Assets/data"
import Item from "../Item/Item"
import { useState } from "react"
import { useEffect } from "react"
import { fetchPopularProducts } from "../../api"

export default function Popular() {
    const [popularProducts, setPopularProducts] = useState([])

    useEffect(() => {
        async function getPopularProducts() {
            try {
                const resData = await fetchPopularProducts()
                setPopularProducts(resData)
            } catch(err) {
                console.error("failed to fetch products", err)
            }
        }

        getPopularProducts()
    }, [])

    return (
        <div className="popular">
            <h1>POPULAR IN WOMEN</h1>
            <hr />
            <div className="popular-item">
                {popularProducts.map(product => (
                    <Item 
                        key={product.id}
                        {...product}
                    />
                ))}
            </div>
        </div>
    )
}
