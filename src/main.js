import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import Vuetify from 'vuetify'

//call Store
import store from './store';


Vue.config.productionTip = false

Vue.use(Vuetify)
new Vue({
  store:store,
  render: h => h(App),
}).$mount('#app')
