import { createContext, useState } from "react"
// import all_product from "../Assets/Frontend_Assets/all_product"
import { useEffect } from "react"
import {AddToCart, fetchAllProducts, RemoveFromCart} from '../api'

export const ShopContext = createContext({
    all_product: [],
    cartItems: {},
    addToCart: () => {},
    removeFromCart: () => {},
    getTotalCartAmount: () => {},
    getTotalCartItems: () => {}
})

function defaultCartObject(products) {
    return products.reduce((acc, product) => {
        acc[product.id] = 0

        return acc
    }, {})
}

// console.log(defaultCartObject())

export default function ShopContextProvider({children}) {
    const [all_product, set_all_product] = useState([])
    const [cartItems, setCartItems] = useState({})

    // console.log(cartItems)
    useEffect(() => {
        async function getAllProducts() {
            try {
                const resData = await fetchAllProducts()
                set_all_product(resData)
                setCartItems(defaultCartObject(resData))
            } catch(err) {
                console.error("failed to fetch products", err)
            }
        }

        getAllProducts()        
    }, [])

    async function addToCart(itemId) {
        setCartItems(prevState => ({...prevState, [itemId]: prevState[itemId]+1}))

        const token = localStorage.getItem('auth-token')
        if(token){
            const resData = await AddToCart(token, itemId)
            console.log(resData)
        }

        
    } 

    async function removeFromCart(itemId) {
        setCartItems(prevState => ({...prevState, [itemId]: prevState[itemId]-1}))

        const token = localStorage.getItem('auth-token')
        if(token) {
            const resData = await RemoveFromCart(token, itemId)
            console.log(resData)
        }
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
