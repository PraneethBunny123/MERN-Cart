import { useParams } from "react-router-dom"
import all_product from "../Assets/Frontend_Assets/all_product"
import Breadcrum from "../components/Breadcrum/Breadcrum"

export default function Product() {
    const {productId} = useParams()
    const product = all_product.find(item => item.id === Number(productId))

    return (
        <div>
            <Breadcrum />
        </div>
    )
}
