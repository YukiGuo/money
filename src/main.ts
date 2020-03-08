import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Nav from '@/components/Nav.vue';
import Icon from '@/components/Icon.vue';
import Layout from '@/components/Layout.vue';
import {tagModel} from '@/models/tagModel';
import {recordModel} from '@/models/recordModel';

Vue.config.productionTip = false;


Vue.component('Nav',Nav);
Vue.component('Icon',Icon);
Vue.component('Layout',Layout);

window.recordList= recordModel.fetch();
window.createRecord=(record)=>{
    recordModel.create(record);
    recordModel.save();
};

window.tagList=tagModel.fetch();
window.findTag=(id: string)=>{
    return window.tagList.filter(item=>(item.id===id))[0];
};
window.createTag = (name: string) => {
    const message =tagModel.create(name);
    if(message=== "重复"){
      alert("标签名重复了")
    }else if(message==="成功"){
      alert("添加成功")
    }
};
window.removeTag=(tag: Tag)=>{
  tagModel.remove(tag);
};
window.updateTag=(id: string,name: string)=>{
  tagModel.update(id, name);
};
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
