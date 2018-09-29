import Vue from 'vue'
import App from './App'
// import './registerServiceWorker'
import * as Mint from 'mint-ui'
import router from './router'
import store from './store'
import * as filters from './utils/filter'
import './assets/stylus/index.styl'

Object.keys(filters).forEach((key) => {
    Vue.filter(key, (filters as any)[key])
})

Vue.use(Mint)
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: (h: any) => h(App)
}).$mount('#app')
