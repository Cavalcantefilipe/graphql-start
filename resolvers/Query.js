const { products, categories } = require('../db')

exports.Query = {
    hello: () => {
        return ["Hello","World", null, "from", "Apollo", "Server"]
    },
    products: () => {
        return products
    },
    product: (parent, args) => {
        const { id } = args
        return products.find((product) => product.id === id)
    },
    categories: () => {
        return categories
    },
    category: (parent, args) => {
        const { id } = args
        return categories.find((category) => category.id === id)
    },
}