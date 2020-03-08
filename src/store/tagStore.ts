import {tagModel} from '@/models/tagModel';

export default {
    tagList:tagModel.fetch(),
    findTag(id: string){
        return this.tagList.filter(item=>(item.id===id))[0];
    },
    createTag(name: string){
        const message =tagModel.create(name);
        if(message=== "重复"){
            alert("标签名重复了")
        }else if(message==="成功"){
            alert("添加成功")
        }
    },
    removeTag(tag: Tag){
        tagModel.remove(tag);
    },
    updateTag(id: string,name: string){
        tagModel.update(id, name);
    },
}