import clone from '@/lib/clone';

const localStorageKeyName = 'recordList';
const recordModel = {
    data: []as RecordItem[],
    fetch() {
       this.data=JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]') as RecordItem[];
       return this.data;
    },
    save() {
        window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));
    },
    create(record: RecordItem){
        const copy=clone(record);
        copy.createdDate=new Date();
        this.data.push(copy);
    }
};

export {recordModel};