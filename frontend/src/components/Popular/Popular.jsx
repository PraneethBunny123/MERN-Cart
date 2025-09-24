import "./Popular.css"
// import data_product from "../../Assets/Frontend_Assets/data"
import Item from "../Item/Item"
import { useContext } from "react"
import { ShopContext } from "../../context/ShopContext"


export default function Popular() {
    const {all_product} = useContext(ShopContext)

    const womenProducts = all_product.filter(product => product.category === "women")
    const popularInWomen = womenProducts.sort((a,b) => b.new_price - a.new_price).slice(0,4)
    // console.log(womenProducts)
    // console.log(popularInWomen)

    return (
        <div className="popular">
            <h1>POPULAR IN WOMEN</h1>
            <hr />
            <div className="popular-item">
                {popularInWomen.map(product => (
                    <Item 
                        key={product.id}
                        {...product}
                    />
                ))}
            </div>
        </div>
    )
}
