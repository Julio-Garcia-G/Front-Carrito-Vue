<template>
    <!-- Card para mostar imagen, nombre y precio de todos los productos -->
    <b-card
        :title="product.nombre"        
        :img-src="require(`@/assets/${product.imagen}`)"
        :img-alt="product.nombre"        
        img-height="200px"        
        img-top        
        style="max-width: 15%;"
        class="my-2 mx-4"
    >
    <p>${{ product.precio }}</p>
    <b-button
        block
        size="sm"
        variant="primary"
        @click="openDetails"
    >
        Detalles
    </b-button>
        <!-- Ventana de diálogo para mostrar detalles y botón de agregar producto al carrito-->
        <Dialog 
            header="Detalles del producto" 
            :visible.sync="displayModal" 
            :style="{width: '50vw'}" 
            :modal="true"
        >
            <img :src="require(`@/assets/${product.imagen}`)" width="270px" height="270px"/><p>
            <p><b>Descripción:</b> {{ product.nombre }}</p>
            <p><b>Precio:</b> ${{ product.precio }} MXN</p>
            <b-button
                variant="warning"
                @click="addProductToCart(product)"
            >
                Agregar al carrito
            </b-button>                
        </Dialog>
        <!-- Mensaje Toast para notificar que se agregó el producto al carrito -->
        <Toast />
    </b-card>    
</template>

<script>
    import { mapMutations } from 'vuex'    

    export default {
        props: {
            product: {
                type: Object,
                required: true
            }
        },        
        data() {
            return {
                displayModal: false                
            }
        },
        methods: {
            ...mapMutations('cart', ['addProduct']),
            addProductToCart(product) {
                //mutación para añadir el producto al arreglo "cart" del state
                this.addProduct(product);

                //toast para mostrar que el producto se agregó al carrito
                this.$toast.add(
                    {severity:'success', summary: 'Notificación', detail:'El producto se ha agregado al carrito', life: 3000}
                );

                //se cierra el dialog modal que muestra los detalles del producto
                this.displayModal = false;
            },
            openDetails() {
                //se muestra el dialog modal con los detalles del producto
                this.displayModal = true;
            } 
        }     
    }
</script>