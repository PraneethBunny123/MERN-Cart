import { useParams } from "react-router-dom"
import all_product from "../Assets/Frontend_Assets/all_product"
import Breadcrum from "../components/Breadcrum/Breadcrum"
import ProductDisplay from "../components/ProductDisplay/ProductDisplay"

export default function Product() {
    const {productId} = useParams()
    console.log(productId)
    const product = all_product.find(item => item.id === Number(productId))

    return (
        <div>
            <Breadcrum {...product}/>
            <ProductDisplay {...product}/>
        </div>
    )
}
