// import createId from '@/lib/createId';
// const localStorageKeyName='tagList';
// const tagStore= {
//     tagList: [] as Tag[],
//     fetchTags(){
//        this.tagList= JSON.parse( window.localStorage.getItem(localStorageKeyName)||'[]');
//         return this.tagList;
//     },
//     findTag(id: string){
//         return this.tagList.filter(item=>(item.id===id))[0];
//     },
//     createTag(name: string){
//         const names=this.tagList.map(item=>item.name);
//         if(names.indexOf(name)>=0){
//             alert("标签名重复了");
//             return ("重复")
//         } else{
//             const id = createId().toString();
//             this.tagList.push({id, name: name});
//             this.saveTags();
//             alert("添加成功");
//             return ('成功');
//         }
//     },
//
//     updateTag(id: string,name: string){
//         const idList=this.tagList.map(item=>item.id);
//         if(idList.indexOf(id)>=0){
//             const nameList=this.tagList.map(item=>item.name);
//             if(nameList.indexOf(name)>=0){
//                 console.log('重复');
//                 return "重复";
//             }else{
//                 console.log('成功');
//                 const tag =this.tagList.filter((item)=>item.id===id)[0];
//                 tag.name=name;
//                 tag.id=name;
//                 this.saveTags();
//                 return "成功";
//             }
//         }else{
//             console.log('找不到');
//             return "找不到标签";
//         }
//     },
//     removeTag(tag: Tag){
//         const index= this.tagList.indexOf(tag);
//         this.tagList.splice(index,1);
//         this. saveTags();
//     },
//     saveTags(){
//         window.localStorage.setItem(localStorageKeyName,JSON.stringify(this.tagList))
//     }
// };
// tagStore.fetchTags();
// export default tagStore;