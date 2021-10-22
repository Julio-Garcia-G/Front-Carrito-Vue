import {find, filter} from 'lodash'

export function addProduct (state, product) {
    const productInCart = find(state.cart, {id: product.id})
    
    //Si no está el producto en el carrito se crea un nuevo objeto, si ya existe el producto se suma 1 a la cantidad
    if (! productInCart){
        const copy = Object.assign({}, product)
        copy.cantidad = 1
        state.cart.push(copy)        
    } else {
        productInCart.cantidad += 1
    }
}

//Se elimina el producto del carrito a través de su id
export function removeProductFromCart (state, product) {
    state.cart = filter(state.cart, ({id}) => id !== product.id)
}

//Se vacía el carrito de compras
export function emptyCart (state) {
    state.cart = [];
}

//Se asigna el número de compra correspondiente a los productos comprados
export function increasePurchaseNumber (state) {
    state.numeroCompra += 1;
}
