import createId from '@/lib/createId.ts';
const localStorageKeyName='tagList';
type Tag={
    id: string;
    name: string;
}
type TagModel={
    data: Tag[];
    fetch: () => Tag[];
    save: () => void;
    create: (name: string) => "成功"|"重复";
    update: (id: string,name: string) => "成功"|"重复"|"找不到标签";
    remove: (tag: Tag) => void;
}

const tagModel: TagModel = {
    data: [],
    fetch() {
        this.data=JSON.parse( window.localStorage.getItem(localStorageKeyName)||'[]');
        return this.data;
    },
    save(){
        window.localStorage.setItem(localStorageKeyName,JSON.stringify(this.data))
    },
    create(name: string ){
        const id= createId().toString();
        const names=this.data.map(item=>item.name);
        if(names.indexOf(name)>=0){
            return ("重复")
        } else{
            this.data.push({id:id ,name:name});
            this.save();
            return ("成功")
        }
    },
   update(id: string,name: string){
        console.log('调用了');
       const idList=this.data.map(item=>item.id);
       if(idList.indexOf(id)>=0){
           const nameList=this.data.map(item=>item.name);
           if(nameList.indexOf(name)>=0){
               console.log('重复');
               return "重复";
           }else{
               console.log('成功');
               const tag =this.data.filter((item)=>item.id===id)[0];
               tag.name=name;
               tag.id=name;
               this.save();
               return "成功";
           }
       }else{
           console.log('找不到');
           return "找不到标签";
       }
   },
    remove(tag: Tag){
        const index= this.data.indexOf(tag);
        this.data.splice(index,1);
        this.save();
    }};

export {tagModel};