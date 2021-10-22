<template>
  <div class="carrito">
    <h2>Lista de Compras</h2>
    <myAccount></myAccount>
  </div>
</template>

<script>
import MyAccount from '@/components/MyAccount'

export default {
  name: 'MiCuenta',
  components: {
    MyAccount
  }
}
</script>