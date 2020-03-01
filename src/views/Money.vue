<template>
    <div>
        <Layout class-prefix="xxx">
            <Tags  :data.sync= 'tags' @update:value="onUpdateTags" />
            <Note @update:value="onUpdateNotes"/>
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
    import Note from '@/components/Money/Note.vue';
    import {Component, Watch} from 'vue-property-decorator';
    type Record ={
        tags: string[];
        notes: string;
        type: string;
        amount: number;
    };
    @Component({
        components: {Note, Types, NumberPad, Tags}
    })
    export default class Money extends Vue {
        record ={
            tags:[''],
            notes:'',
            type:'-',
            amount:0
        };
        tags: string[]= ['衣', '食', '住', '行'];
        recordList: Record[] =[];
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
           const copy= JSON.stringify(this.record);
            this.recordList.push(JSON.parse(copy));
            console.log(this.recordList);
        }
        @Watch('recordList')
        onRecordListChange(){
            window.localStorage.setItem('recordList',JSON.stringify(this.recordList))

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