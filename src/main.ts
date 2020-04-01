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
if(document.documentElement.clientWidth>=500){
  window.alert('手机预览，效果更佳哦~');
  const img= document.createElement('img');
  img.src='./code.png';
  img.style.position='fixed';
  img.style.left='50%';
  img.style.top='50%';
  img.style.transform='translate(-50%,-50%)';
  img.style.boxShadow='0 0 10px rgba(0,0,0,0.25)';
setTimeout(function () {
img.remove();
},8000);
  document.body.append(img)
}
};