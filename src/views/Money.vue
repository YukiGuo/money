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
    import {model} from '@/model';
    window.localStorage.setItem('version','0.0.1');
    @Component({
        components: {Note, Types, NumberPad, Tags}
    })
    export default class Money extends Vue {
        record ={
            tags:[''],
            notes:'',
            type:'-',
            amount:0,
        };
        recordList =model.fetch();
        tags: string[]= ['衣', '食', '住', '行'];
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
            const copy=model.clone(this.recordList);
            copy.createdDate=new Date();
            this.recordList.push(copy);
        }
        @Watch('recordList')
        onRecordListChange(){
           model.save(this.recordList);

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