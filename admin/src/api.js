export async function uploadImage(image) {
    const formData = new FormData()
    formData.append("product", image)

    const response = await fetch('http://localhost:4000/upload', {
        method: 'POST',
        headers: {
            Accept: 'application/json'
        },
        body: formData
    })

    return response.json()
}

export async function addProduct(updatedProductDetails) {
    const response = await fetch('http://localhost:4000/addProduct', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedProductDetails)
    })

    return response.json()
}

export async function fetchAllProducts() {
    const response = await fetch('http://localhost:4000/allProducts')

    return response.json()
}

export async function removeProducts(id) {
    const response = await fetch(`http://localhost:4000/removeProduct/${id}`, {
        method: 'DELETE'
    })

    return response.json()
}