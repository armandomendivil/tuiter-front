// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueSocketio from 'vue-socket.io';

import App from './App';
import router from './router';

Vue.use(VueAxios, axios);
Vue.use(VueSocketio, 'http://localhost:9000');

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
