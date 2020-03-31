type RecordItem ={
    id?: string;
    tag: Tag;
    notes: string;
    type: string;
    amount: number;
    createdDate?: string;
};
type BarList={ value: number; name: string }[]
type PieList={ value: number; name: string }[]
type Tag = {
    id: string;
    name: string;
    icon: string;
    type: string;
}
type TagModel={
    data: Tag[];
    fetch: () => Tag[];
    save: () => void;
    create: (name: string) => "成功"|"重复";
    update: (id: string,name: string) => "成功"|"重复"|"找不到标签";
    remove: (tag: Tag) => void;
};

type RootState ={
    recordList: RecordItem[];
    tagList: Tag[];
    currentTag?: Tag;
}