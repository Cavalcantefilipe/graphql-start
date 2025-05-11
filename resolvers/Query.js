exports.Query = {
    hello: () => {
        return ["Hello","World", null, "from", "Apollo", "Server"]
    },
    products: (parent, args, {products}) => {
        return products
    },
    product: (parent, args, {products}) => {
        const { id } = args
        return products.find((product) => product.id === id)
    },
    categories: (parent, args, {categories}) => {
        return categories
    },
    category: (parent, args, {categories}) => {
        const { id } = args
        return categories.find((category) => category.id === id)
    },
    reviews: (parent, args, {reviews}) => {
        return reviews
    },
    review: (parent, args, {reviews}) => {
        const { id } = args
        return reviews.find((review) => review.id === id)
    },
}