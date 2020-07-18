import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'

Vue.config.productionTip = false


  // Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxoP2B89a5Ru_L2ubInkbmt6Uj9bQFRHU",
  authDomain: "my-address-pj-75c08.firebaseapp.com",
  databaseURL: "https://my-address-pj-75c08.firebaseio.com",
  projectId: "my-address-pj-75c08",
  storageBucket: "my-address-pj-75c08.appspot.com",
  messagingSenderId: "363855112919",
  appId: "1:363855112919:web:71b159d5424adfa8e0de92",
  measurementId: "G-H2DH6C85KN"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')