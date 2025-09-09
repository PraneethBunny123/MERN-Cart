import { createContext, useState } from "react"
import all_product from "../Assets/Frontend_Assets/all_product"

export const ShopContext = createContext()

function defaultCartObject() {
    return all_product.reduce((acc, product) => {
        acc[product.id] = 0

        return acc
    }, {})
}

// console.log(defaultCartObject())

export default function ShopContextProvider({children}) {
    const [cartItems, setCartItems] = useState(defaultCartObject())

    console.log(cartItems)

    function addToCart(itemId) {
        setCartItems(prevState => ({...prevState, [itemId]: prevState[itemId]+1}))
    } 

    function removeFromCart(itemId) {
        setCartItems(prevState => ({...prevState, [itemId]: prevState[itemId]-1}))
    } 

    function getTotalCartAmount() {

    }

    const value = {
        all_product,
        cartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount
    }
    
    return (
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>
    )
}
