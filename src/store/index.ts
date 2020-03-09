import Vue from 'vue'
import Vuex from 'vuex'
import clone from '@/lib/clone';
import createId from '@/lib/createId';

Vue.use(Vuex);

 const store =new Vuex.Store({
  state: {
      recordList:[] as RecordItem[],
      tagList: [] as Tag[],
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
    },
      fetchTags(state){
          state.tagList= JSON.parse( window.localStorage.getItem('tagList')||'[]');
      },
      saveTags(state){
          window.localStorage.setItem('tagList',JSON.stringify(state.tagList))
      },
      removeTag(state,tag: Tag){
          const index= state.tagList.indexOf(tag);
          state.tagList.splice(index,1);
          store.commit('saveTag');
      },
      createTag(state,name: string){
          const names=state.tagList.map(item=>item.name);
          if(names.indexOf(name)>=0){
              alert("标签名重复了");
          } else{
              const id = createId().toString();
              state.tagList.push({id, name: name});
              store.commit('saveTags');
              alert("添加成功");
          }
      },
      updateTag(state,id: string){
          const idList=state.tagList.map((item)=> item.id);
          if(idList.indexOf(id)>=0){
              const nameList=state.tagList.map( item => item.name);
              if(nameList.indexOf(name)>=0){
                  console.log('重复');
              }else{
                  console.log('成功');
                  const tag =state.tagList.filter((item)=>item.id===id)[0];
                  tag.name=name;
                 store.commit('saveTags');
              }
          }else{
              console.log('找不到');
          }
      },



  },
  modules: {
  },
  actions: {
  }
});
export default store;