import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import i18n from './plugins/i18n'
import moment from 'moment'
import 'moment/locale/fr'
moment.locale('fr')

Vue.config.productionTip = false

Vue.prototype.moment = moment

new Vue({
  i18n,
  vuetify,
  render: h => h(App)
}).$mount('#app')
