// import * as Mint from 'mint-ui'
// import Vue from 'vue'
// import { AppComponent } from './App'
// // import './registerServiceWorker'
// import router from './router'
// import store from './store'
// import * as filters from './utils/filter'

// Object.keys(filters).forEach((key) => {
//     Vue.filter(key, (filters as any)[key])
// })

// Vue.use(Mint)
// Vue.config.productionTip = false

// new Vue({
//     router,
//     store,
//     template: '<AppComponent />',
//     components: { AppComponent }
//     // render: (h) => h(App)
// }).$mount('#app')

import * as Mint from 'mint-ui'
import Vue from 'vue'
import App from './App.vue'
// import './registerServiceWorker'
import router from './router'
import store from './store'
import * as filters from './utils/filter'

Object.keys(filters).forEach((key) => {
    Vue.filter(key, (filters as any)[key])
})

Vue.use(Mint)
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app')
