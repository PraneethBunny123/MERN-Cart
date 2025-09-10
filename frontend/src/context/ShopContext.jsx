import { createContext, useState } from "react"
import all_product from "../Assets/Frontend_Assets/all_product"

export const ShopContext = createContext({
    all_product: [{}],
    cartItems: {},
    addToCart: () => {},
    removeFromCart: () => {},
    getTotalCartAmount: () => {},
    getTotalCartItems: () => {}
})

function defaultCartObject() {
    return all_product.reduce((acc, product) => {
        acc[product.id] = 0

        return acc
    }, {})
}

// console.log(defaultCartObject())

export default function ShopContextProvider({children}) {
    const [cartItems, setCartItems] = useState(defaultCartObject())

    // console.log(cartItems)

    function addToCart(itemId) {
        setCartItems(prevState => ({...prevState, [itemId]: prevState[itemId]+1}))
    } 

    function removeFromCart(itemId) {
        setCartItems(prevState => ({...prevState, [itemId]: prevState[itemId]-1}))
    } 

    function getTotalCartAmount() {
        return all_product.reduce((acc, curr) => {
            const id = curr.id
            return acc + cartItems[id] * curr.new_price
        }, 0)
    }

    function getTotalCartItems() {
        let totalItems = 0
        for(const i in cartItems) {
            totalItems += cartItems[i] 
        }
        return totalItems
    }

    console.log(getTotalCartItems())

    // console.log(getTotalCartAmount())

    const value = {
        all_product,
        cartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount, 
        getTotalCartItems
    }
    
    return (
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>
    )
}
