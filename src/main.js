import Vue from 'vue'
import App from './App.vue'

Vue.component('vue-draggable-resizable', require('vue-draggable-resizable'))


Vue.config.productionTip = true

new Vue({
  render: h => h(App),
}).$mount('#app')
