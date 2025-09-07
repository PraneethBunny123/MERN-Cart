import "./css/ShopCategory.css"
import all_product from "../Assets/Frontend_Assets/all_product"
import dropdown_icon from "../Assets/Frontend_Assets/dropdown_icon.png"
import Item from "../components/Item/Item"

export default function ShopCategory({category, banner}) {
    const filteredProducts = all_product.filter(product => product.category === category)
    
    return (
        <div className="shop-category">
            <img src={banner} alt="" className="shop-category-banner"/>
            <div className="shop-category-index-sort">
                <p>
                    <span>Showing 1-12 </span>
                    out of 36 products
                </p>
                <div className="shop-category-sort">
                    Sort by <img src={dropdown_icon} alt=""/>
                </div>
            </div>
            <div className="shop-category-products">
                {filteredProducts.map(product => (
                    <Item 
                        key={product.id}
                        {...product}
                    />
                ))}
            </div>
            <div className="shop-category-loadmore">
                Explore More
            </div>
        </div>
    )
}
