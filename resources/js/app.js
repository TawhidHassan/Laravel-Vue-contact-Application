
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
import Vue from 'vue'
import moment from 'moment';
import { Form, HasError, AlertError } from 'vform'

import swal from 'sweetalert2'
window.swal = swal;

const toast = swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
});

window.toast = toast;


window.Fire =  new Vue();


window.Form=Form;
Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)

import VueProgressBar from 'vue-progressbar'
Vue.use(VueProgressBar, {
    color: 'rgb(143, 255, 199)',
    failedColor: 'red',
    height: '3px'
  })



import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
    { path: '/dashboard', component:  require('./components/dashboard.vue').default },
    { path: '/profile', component: require('./components/profile.vue').default },
    { path: '/users', component: require('./components/Users.vue').default },
    { path: '/developer', component: require('./components/Developer.vue').default },
    { path: '*', component: require('./components/NotFound.vue') }
  ]

  const router = new VueRouter({
      mode:'history',
    routes // short for `routes: routes`
  })

  Vue.filter('upText', function(text){
    return text.charAt(0).toUpperCase() + text.slice(1)
});

Vue.filter('myDate',function(created){
    return moment(created).format('MMMM Do YYYY');
});
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */


Vue.component(
  'passport-clients',
  require('./components/passport/Clients.vue').default
);

Vue.component(
  'passport-authorized-clients',
  require('./components/passport/AuthorizedClients.vue').default
);

Vue.component(
  'passport-personal-access-tokens',
  require('./components/passport/PersonalAccessTokens.vue').default
);





const app = new Vue({
    el: '#app',
    router
}).$mount('#app')
