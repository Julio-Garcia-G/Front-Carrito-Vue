import Vue from 'vue'
import PrimeVue from 'primevue/config'
import Dialog from 'primevue/dialog'
import ToastService from 'primevue/toastservice'
import Toast from 'primevue/toast'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Paginator from 'primevue/paginator'

import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

Vue.use(PrimeVue)
Vue.use(ToastService)

Vue.component('Dialog', Dialog);
Vue.component('Toast', Toast);
Vue.component('DataTable', DataTable);
Vue.component('Column', Column);
Vue.component('Paginator', Paginator);
