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
        const names=this.data.map(item=>item.name);
        if(names.indexOf(name)>=0){
            return ("重复")
        } else{
            this.data.push({id:name,name:name});
            this.save();
            return ("成功")
        }

    }
};

export {tagModel};