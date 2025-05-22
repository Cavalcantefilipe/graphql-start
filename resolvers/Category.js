exports.Category= {
    products: ({id}, {filter}, {products, reviews}) => {
        const categoryProducts = products.filter((product) => product.categoryId === id)
        if (filter) {
            if (filter.onSale) {
                return categoryProducts.filter((product) => product.onSale)
            }
            if (filter.avgRating) {
                return categoryProducts.filter((product) => {
                    const productReviews = reviews.filter((review) => review.productId === product.id)
                    const avgRating = productReviews.reduce((acc, review) => acc + review.rating, 0) / productReviews.length
                    return avgRating >= filter.avgRating
                })
            }
        }
        return categoryProducts
    },
}