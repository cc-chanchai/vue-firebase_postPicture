import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { store } from './store'
import vuetify from './plugins/vuetify';
import firebase from 'firebase'
import { firebaseConfig } from './config'

firebase.initializeApp(firebaseConfig)
Vue.config.productionTip = false

// new Vue({
//   router,
//   store,
//   vuetify,
//   beforeCreated () {
//     firebase.getCurrentUser = () => {
//       firebase.auth().onAuthStateChanged((firebaseUser) => {
//         if (firebaseUser) {        
//           store.dispatch('autoSignIn', firebaseUser)
//         }
//       })
//     }
//     },
//   render: h => h(App),
// }).$mount('#app')

const unsubscribe = firebase.auth()
.onAuthStateChanged((firebaseUser) => {
  new Vue({
    el: '#app',
    router,
    store,
    vuetify,
    render: h => h(App),
    created () {
      if (firebaseUser) {
        store.dispatch('autoSignIn', firebaseUser)
      }
    }
  })
  unsubscribe()
})