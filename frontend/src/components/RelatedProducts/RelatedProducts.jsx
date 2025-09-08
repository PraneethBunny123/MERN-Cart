import "./RelatedProducts.css"
import data_product from "../../Assets/Frontend_Assets/data"
import Item from "../Item/Item"

export default function RelatedProducts() {
    return (
        <div className="related-products">
            <h1>Related Products</h1>
            <hr />
            <div className="related-products-item">
                {data_product.map(item => (
                    <Item 
                        key={item.id}
                        {...item}
                    />
                ))}
            </div>
        </div>
    )
}
