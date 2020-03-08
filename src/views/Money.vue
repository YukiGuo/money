<template>
    <div>
        <Layout class-prefix="xxx">
            <Tags  :data.sync= 'tags' @update:value="onUpdateTags" />
            <FormItem @update:value="onUpdateNotes" file-name="备注" placeholder="请填写备注"/>
            <Types :value="record.type" @update:value="onUpdateType" />
            <NumberPad @update:value ="onUpdateAmount" @submit:value="saveRecordList" />
        </Layout>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import Tags from '@/components/Money/Tags.vue';
    import NumberPad from '@/components/Money/NumberPad.vue';
    import Types from '@/components/Money/Types.vue';
    import FormItem from '@/components/Money/FormItem.vue';
    import {Component} from 'vue-property-decorator';
    window.localStorage.setItem('version','0.0.1');
    @Component({
        components: {FormItem, Types, NumberPad, Tags}
    })
    export default class Money extends Vue {
        tags=window.tagList;
        recordList: RecordItem[]=window.recordList;
        record ={
            tags:[''],
            notes:'',
            type:'-',
            amount:0,
            createdDate:''
        };
        onUpdateTags(value: string[]){
            this.record.tags=value;
        }
        onUpdateType(value: string){
            this.record.type=value;
        }
        onUpdateAmount(value: string){
            this.record.amount=parseFloat(value);
        }
        onUpdateNotes(value: string){
            this.record.notes=value;
        }
        saveRecordList(){
            window.createRecord(this.record);
        }
    }
</script>
<style lang="scss">
    .xxx-content {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        overflow: auto;
    }
</style>
<style lang='scss' scoped>
</style>