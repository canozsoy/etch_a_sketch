import Vue from 'vue';
import App from './App.vue';
import store from "@/store";
import "@/assets/global.scss";

// Import font awesome

import { library } from '@fortawesome/fontawesome-svg-core';
import { faInfoCircle, faPencilAlt, faEraser, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faInfoCircle, faPencilAlt, faEraser, faTimes);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
