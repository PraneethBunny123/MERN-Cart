import "./NewCollections.css"
import new_collections from "../../Assets/Frontend_Assets/new_collections"
import Item from "../Item/Item"

export default function NewCollections() {
    return (
        <div className="new-collections">
            <h1>NEW COLLECTIONS</h1>
            <hr />
            <div className="collections">
                {new_collections.map(product => (
                    <Item 
                        key={product.id}
                        {...product}
                    />
                ))}
            </div>
        </div>
    )
}
