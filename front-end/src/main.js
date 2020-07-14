import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import art from './art-data.js';

Vue.config.productionTip = false

let data = {
  art: art
}

new Vue({
  router,
  vuetify,
  data,
  render: h => h(App)
}).$mount('#app')
