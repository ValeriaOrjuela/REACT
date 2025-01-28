const products = [
    {
        id: '1',
        name: 'Leggings Negros',
        price: 95000,
        category: 'Deportivos Mujer',
        img: 'https://wargosports.com/cdn/shop/files/women_NEGRO_10.jpg?v=1730474412&width=800',
        stock: 105,
        description: 'Leggings negros para mujer, sin costuras ni transparencias'
    },
    {
        id: '2',
        name: 'Leggings Crema',
        price: 95000,
        category: 'Deportivos Mujer',
        img: 'https://wargosports.com/cdn/shop/files/beige3.jpg?v=1730475168&width=800',
        stock: 25,
        description: 'Leggings color crema para mujer, sin costuras ni transparencias'
    },
    {
        id: '3',
        name: 'Leggings Blanco',
        price: 95000,
        category: 'Deportivos Mujer',
        img: 'https://wargosports.com/cdn/shop/files/women_blanco_3.jpg?v=1730474074&width=800',
        stock: 35,
        description: 'Leggings color blanco para mujer, sin costuras ni transparencias'
    },

]

export const getProducts =() =>{
    return new Promise((resolve) => {
        setTimeout(() => {
        resolve(products)
        }, 500)
    })

}
export const getProductsById = (productId) =>{
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}
export const getProductsByCategory = async (categoryId) =>{
    const products = await getProducts()
    return products.filter(product => product.category === categoryId)

}
