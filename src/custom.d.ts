type RecordItem ={
    tags: string[];
    notes: string;
    type: string;
    amount: number;
    createdDate: Date;
};
type Tag={
    id: string;
    name: string;
};
type TagModel={
    data: Tag[];
    fetch: () => Tag[];
    save: () => void;
    create: (name: string) => "成功"|"重复";
    update: (id: string,name: string) => "成功"|"重复"|"找不到标签";
    remove: (tag: Tag) => void;
};
interface Window{
    tagList: Tag[];
    findTag: (id: string) => Tag;
    createTag: (name: string) => void;
    removeTag: (tag: Tag) => void;
    updateTag: (id: string,name: string) => void;
}