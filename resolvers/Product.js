const { categories } = require('../db')


exports.Product= {
    category: (parent) => {
        const { categoryId } = parent
        return categories.find((category) => category.id === categoryId)
    },
}