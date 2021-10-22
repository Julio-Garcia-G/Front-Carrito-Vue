<template>
  <div id="app">
    <b-container>
      <b-nav tabs fill>
        <b-nav-item exact to="/">Inicio</b-nav-item>
        <b-nav-item exact to="/carrito">Carrito</b-nav-item>
        <b-nav-item exact to="/cuenta">Mi cuenta</b-nav-item>
      </b-nav>
    </b-container>
    <router-view/>        
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;  
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;  
}

.container {
  padding: 15px;  
}

a.router-link-exact-active {
  font-weight: bold;  
}
</style>
