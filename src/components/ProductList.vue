<template>    
    <div v-if= "products.length">
        <paginate
            name="products"
            :list="products"
            :per="perPage"
        >
        <b-card-group style="max-width: 100%;">
            <!-- Con un ciclo for-in se recorren los productos del state -->
            <product-item
                v-for="product in paginated('products')"
                :product="product"
                :key="product.id"                
            >
            
            </product-item>            
            
        </b-card-group>
        
        </paginate>        

        <paginate-links
            for="products"
            :classes="{
                'ul': 'pagination',
                'li': 'page-item',
                'li > a': 'page-link'
            }"
        >
        </paginate-links>
    </div>
    <b-alert v-else show variant="info">No hay productos para mostrar</b-alert>
            
</template>

<script>
    import { mapActions, mapState } from 'vuex'
    import ProductItem from './ProductItem'

    export default {
        components: {
            ProductItem                
        },
        mounted() {
            //Con esta acción se obtienen los productos para mostrarlos
            this.fetchProducts()
        },
        data() {
            return {
                paginate: ['products'],
                perPage: 5                
            }
        },
        computed: {
            ...mapState('products', ['products'])
        },
        methods: {
            ...mapActions('products', ['fetchProducts']),           
        }
    }
</script>
