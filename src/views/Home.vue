<template>
  <div class="home">
    <h2>Lista de Productos</h2>
    <productList></productList>          
  </div>
</template>

<script>
// @ is an alias to /src
import ProductList from '@/components/ProductList'

export default {
  name: 'Home',
  components: {
    ProductList
  }
}
</script>
