exports.Query = {
    hello: () => {
        return ["Hello","World", null, "from", "Apollo", "Server"]
    },
    products: (parent, {filter}, {products, reviews}) => {
        let filteredProducts = products
        if (filter) {
            const { onSale, avgRating } = filter
            if (onSale) {
                filteredProducts = filteredProducts.filter((product) => product.onSale)
            }
            if (avgRating) {
                filteredProducts = filteredProducts.filter((product) => {
                    const productReviews = reviews.filter((review) => review.productId === product.id)
                    const avgRating = productReviews.reduce((acc, review) => acc + review.rating, 0) / productReviews.length
                    return avgRating >= filter.avgRating
                })
            }
        }
        return filteredProducts
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