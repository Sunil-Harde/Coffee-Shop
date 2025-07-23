let URL = "https://coffee-shop-api-sandy.vercel.app/api/v1/products"

export const getCofferDataFromApi = async () => {
    const response = await fetch(URL)
    return await response.json();
}