<template>
    <div class="mt-4" v-if="cart.length">
        <b-table striped hover :items="cart" :fields="fields" >
            <!-- Se agrega el $ a los valores de la columna precio-->
            <template #cell(precio)="row">
                ${{ row.value }}                
            </template>

            <!-- Se agrega una columna para mostrar el subtotal de cada producto -->
            <template #cell(subtotal)="data">
                ${{ data.item.cantidad * data.item.precio }}
            </template>

            <!-- Se agrega una columna personalizada a la tabla para el botón de eliminar --> 
            <template #cell(acciones)="row">
                <b-button size="sm"
                          variant="danger"
                          @click.stop="removeProductFromCart(row.item)"
                >
                Eliminar
                </b-button>
            </template>
            
        </b-table>
        <b-alert show variant="success" class="text-center">
            Costo Total: ${{ totalCost }} MXN
        </b-alert>
        <b-button
            class="mt-3"
            variant="primary"
            @click="insertarCompra(cart, compra)"
        >
        Finalizar Compra
        </b-button>        
    </div>    
    <b-alert v-else show variant="info">No hay productos en el carrito</b-alert>    
</template>

<script>
import {mapGetters, mapMutations, mapState} from 'vuex'
import CompraService from '../service/CompraService'

export default {
    data() {
        return {
            fields: ['nombre','cantidad','precio','subtotal','acciones'],
            compra: {
                nombre: null,
                cantidad: 0,
                precio: 0,
                subtotal: 0                
            }
        }
    },
    compraService: null,
    created() {
        this.compraService = new CompraService();
    },
    computed: {
        ...mapState('cart', ['cart','numeroCompra']),
        ...mapGetters('cart', ['totalCost'])
    },
    methods: {
        ...mapMutations('cart',['removeProductFromCart','emptyCart','increasePurchaseNumber']),
        insertarCompra(cart, compra) { 

            //se incrementa el número de compra
            this.increasePurchaseNumber();

            //for para recorrer el arreglo de objetos "cart" y asignar valores al objeto "compra"
            for (let value of cart) {        
                compra.nombre = value.nombre;
                compra.cantidad = value.cantidad;
                compra.precio = value.precio;
                
                //Se asigna el número de compra a la propiedad "compra_id" del objeto compra
                compra.compra_id = this.numeroCompra;

                //Promesa para ejecutar el método POST e insertar los productos del carrito en la tabla "compras"
                this.compraService.insertarCompra(compra)
                .then(data => {                
                    console.log(data);
                })
                .catch(e => {
                    console.log(compra);
                    console.log(e);
                })
            }                     

            /*Toast para indicar que se ha registrado la compra
            this.$toast.add(
                {severity:'success', summary: 'Notificación', detail:'Su compra se ha realizado exitosamente', life: 3000}
            );*/

            //Se vacía el carrito
            this.emptyCart();
            
        }
    }
}
</script>
