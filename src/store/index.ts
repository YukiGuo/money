import Vue from 'vue';
import Vuex from 'vuex';
import clone from '@/lib/clone';
import createId from '@/lib/createId';
import router from '@/router';
import tagArray from '@/constants/tagArray';

Vue.use(Vuex);
const store = new Vuex.Store({
    state: {
        recordList: [],
        tagList: [],
        currentTag: undefined
    } as RootState,
    mutations: {
        fetchRecords(state) {
            // if (!window.localStorage.getItem('recordList')){
            //     alert('aaa');
            //     window.localStorage.setItem('recordList',JSON.stringify(arr))
            // }
            state.recordList = JSON.parse(window.localStorage.getItem('recordList') || '[]') as RecordItem[];
        },
        saveRecords(state) {
            window.localStorage.setItem('recordList', JSON.stringify(state.recordList));
        },
        createRecord(state, record: RecordItem) {
            const copy = clone(record);
            copy.createdDate = new Date().toISOString();
            state.recordList?.push(copy);
            store.commit('saveRecords');
        },
        fetchTags(state) {
            const list=JSON.stringify(tagArray);
            state.tagList = JSON.parse(window.localStorage.getItem('tagList')||list);
            window.localStorage.setItem('_idMax',state.tagList.length.toString());
            store.commit('saveTags');

        },
        getCurrentTag(state, id: string) {
            state.currentTag = state.tagList.filter(item => (item.id === id))[0];
        },
        saveTags(state) {
            window.localStorage.setItem('tagList', JSON.stringify(state.tagList));
        },
        removeTag(state, id) {
            // const index= state.tagList.indexOf(tag);
            // state.tagList.splice(index,1);
            // store.commit('saveTags');


            let index = -1;
            for (let i = 0; i < state.tagList.length; i++) {
                if (state.tagList[i].id === id) {
                    index = i;
                    break;
                }
            }
            if (index >= 0) {
                state.tagList.splice(index, 1);
                store.commit('saveTags');
                alert('删除成功');
                router.back();
            } else {
                window.alert('删除失败');
            }

        },
        createTag(state, payload: {name: string; icon: string;type: string}) {
            const{name,icon,type}=payload;
            if(name ===''){
                alert('标签名不能为空');
            }
            if(icon===''){
                alert('icon不能为空');
                return;
            }
            const names = state.tagList.map(item => item.name);
            if (names.indexOf(name) >= 0) {
                alert('标签名重复了');
            } else {
                const id = createId().toString();
                state.tagList.push({id, name: name,icon:icon,type:type});
                store.commit('saveTags');
                alert('添加成功');
            }
        },
        updateTag(state, payload: { id: string; name: string }) {
            const {id, name} = payload;
            const idList = state.tagList.map((item) => item.id);
            if (idList.indexOf(id) >= 0) {
                const nameList = state.tagList.map(item => item.name);
                if (nameList.indexOf(name) >= 0) {
                    window.alert('标签名重复了');
                } else {
                    console.log('成功');
                    const tag = state.tagList.filter((item) => item.id === id)[0];
                    tag.name = name;
                    store.commit('saveTags');
                }
            } else {
                console.log('找不到');
            }
        },


    },
    modules: {},
    actions: {}
});
export default store;