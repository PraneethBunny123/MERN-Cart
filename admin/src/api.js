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