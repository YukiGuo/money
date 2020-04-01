import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Nav from '@/components/Nav.vue';
import Icon from '@/components/Icon.vue';
import Layout from '@/components/Layout.vue';
import VueDatepickerLocal from 'vue-datepicker-local';

Vue.config.productionTip = false;
Vue.component('Nav',Nav);
Vue.component('Icon',Icon);
Vue.component('Layout',Layout);
Vue.component('VueDatepickerLocal',VueDatepickerLocal);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

window.onload=function () {
  setTimeout(function () {
      window.scrollTo(0,200)
  });
if(document.documentElement.clientWidth>500){
  window.alert('手机预览，效果更佳哦~')
}
};