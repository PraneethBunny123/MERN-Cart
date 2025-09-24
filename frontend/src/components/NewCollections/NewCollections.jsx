import "./NewCollections.css"
// import new_collections from "../../Assets/Frontend_Assets/new_collections"
import Item from "../Item/Item"
import { useState } from "react"
import { useEffect } from "react"
import { fetchNewCollections } from "../../api"

export default function NewCollections() {
    const [newCollections, setNewCollections] = useState([])

    useEffect(() => {
        async function getNewCollections() {
            try {
                const resData = await fetchNewCollections()
                setNewCollections(resData)
            } catch(err) {
                console.error("failed to fetch products", err)
            }
        }

        getNewCollections()    
    }, [])

    return (
        <div className="new-collections">
            <h1>NEW COLLECTIONS</h1>
            <hr />
            <div className="collections">
                {newCollections.map(product => (
                    <Item 
                        key={product.id}
                        {...product}
                    />
                ))}
            </div>
        </div>
    )
}
