import axios from 'axios';

export default class CompraService {

    url = "https://carritovue.herokuapp.com/api/v1/compras"
    
    consultarCompras() {
        return axios.get(this.url);
    }

    insertarCompra(compra) {
        return axios.post(this.url, compra);
    }

}