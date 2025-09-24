export async function Signup(userData) {
    const response = await fetch("http://localhost:4000/signup", {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
    })

    return response.json()
}

export async function Login(userData) {
    const response = await fetch("http://localhost:4000/login", {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
    })

    return response.json()
}

export async function fetchAllProducts() {
    const response = await fetch('http://localhost:4000/allProducts')

    return response.json()
}

export async function fetchNewCollections() {
    const response = await fetch('http://localhost:4000/newcollections')

    return response.json()
}

export async function fetchPopularProducts() {
    const response = await fetch('http://localhost:4000/popular')

    return response.json()
}