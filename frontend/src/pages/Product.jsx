import { useParams } from "react-router-dom"
import Breadcrum from "../components/Breadcrum/Breadcrum"
import ProductDisplay from "../components/ProductDisplay/ProductDisplay"
import DescriptionBox from "../components/DescriptionBox/DescriptionBox"
import RelatedProducts from "../components/RelatedProducts/RelatedProducts"
import { useContext } from "react"
import { ShopContext } from "../context/ShopContext"

export default function Product() {

    const {all_product} = useContext(ShopContext)

    const {productId} = useParams()
    console.log(productId)
    const product = all_product.find(item => item.id === Number(productId))

    return (
        <div>
            <Breadcrum {...product}/>
            <ProductDisplay {...product}/>
            <DescriptionBox />
            <RelatedProducts />
        </div>
    )
}
