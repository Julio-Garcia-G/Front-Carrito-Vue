export function totalCost (state) {
    return state.cart.reduce((sum, product) => {
        return (parseFloat(product.precio) * product.cantidad) + sum
    }, 0)
}