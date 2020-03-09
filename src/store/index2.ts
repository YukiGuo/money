import recordStore from '@/store/recordStore';
import tagStore from '@/store/tagStore';

const store2={
    ...recordStore,
    ...tagStore

};
export default store2;