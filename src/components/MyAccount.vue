<template>
    <div style="margin: 0 auto; width: 75%;">
        <!-- Tabla que muestra todos los productos que se han comprado -->
        <DataTable :value="compras" :paginator="true" :rows="7" class="text-center">
            <Column field="nombre" header="Nombre del Producto"></Column>
            <Column field="cantidad" header="Cantidad"></Column>
            <Column field="precio" header="Precio"></Column>
            <Column field="subtotal" header="Subtotal"></Column>
        </DataTable>
    </div>
</template>

<script>
import CompraService from '../service/CompraService';

export default {
    name: 'MyAccount',
    data() {
        return {
            compras: null
        }
    },
    compraService: null,
    created() {
        this.compraService = new CompraService();
    },
    mounted() {
        //Promesa para ejecutar el método GET y consultar los productos comprados
        this.compraService.consultarCompras().
        then(data => {
            this.compras = data.data;
        })
        .catch(e => {
            console.log(e);
        });
    }
}
</script>