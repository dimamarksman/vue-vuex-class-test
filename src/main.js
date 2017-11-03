import Vue from 'vue';
import 'babel-polyfill';
import store from './store';

import App from './components/App.vue';

Vue.config.productionTip = false;

function initApp() {
  return new Vue({
    store,
    render(h) {
      return h(App);
    },
    components: { App },
  }).$mount('#app');
}

initApp();
