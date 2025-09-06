import "./Popular.css"
import data_product from "../../Assets/Frontend_Assets/data"
import Item from "../Item/Item"

export default function Popular() {
    return (
        <div className="popular">
            <h1>POPULAR IN WOMEN</h1>
            <hr />
            <div className="popular-item">
                {data_product.map(product => (
                    <Item 
                        key={product.id}
                        {...product}
                    />
                ))}
            </div>
        </div>
    )
}
