import { createContext, useState } from "react"
import all_product from "../Assets/Frontend_Assets/all_product"

export const ShopContext = createContext()

export default function ShopContextProvider({children}) {
    const [cartItems, setCartItems] = useState({})

    function addToCart(itemId) {
        setCartItems(prevState => ({...prevState, [itemId]: prevState[itemId]+1}))
    } 

    function removeFromCart(itemId) {
        setCartItems(prevState => ({...prevState, [itemId]: prevState[itemId]-1}))
    } 

    const value = {
        all_product,
        cartItems,
        addToCart,
        removeFromCart
    }
    
    return (
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>
    )
}
