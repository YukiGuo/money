import Vue from 'vue'
import Vuex from 'vuex'
import clone from '@/lib/clone';

Vue.use(Vuex);

 const store =new Vuex.Store({
  state: {
    recordList:[] as RecordItem[],
  },
  mutations: {
    fetchRecords(state) {
      state.recordList=JSON.parse(window.localStorage.getItem('recordList') || '[]')as RecordItem[];
    },
    saveRecords(state) {
      window.localStorage.setItem('recordList', JSON.stringify(state.recordList));
    },
    createRecord(state,record: RecordItem) {
      const copy=clone(record);
      copy.createdDate=new Date();
      state.recordList?.push(copy);
      store.commit('saveRecords');
    }
  },
  modules: {
  },
  actions: {
  }
});
export default store;