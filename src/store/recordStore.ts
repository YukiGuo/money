import {recordModel} from '@/models/recordModel';

export default {
    recordList: recordModel.fetch(),
    createRecord(record: any) {
        recordModel.create(record);
        recordModel.save();
    }
}