<template>
  <div class="carrito">
    <h2>Carrito de compras</h2>
    <cart></cart>
    <!-- Mensaje Toast para notificar que se realizó la compra
    <Toast/> -->
  </div>
</template>

<script>
import Cart from '@/components/Cart'

export default {
  name: 'Carrito',
  components: {
    Cart
  }
}
</script>
