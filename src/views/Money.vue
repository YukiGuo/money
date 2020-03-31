<template>
    <div>
        <Layout class-prefix="xxx">
            <Tab :list="typeList" :value.sync="record.type"/>
            <Tags @update:value="onUpdateTag" :type="record.type"/>
            <div class="timeWrap">
                <vue-datepicker-local class="time" v-model="createdDate"  @input="onUpdateDate" />
                <FormItem @update:value="onUpdateNotes" file-name="备注:" placeholder="请填写备注" class="form"/>
            </div>
            <NumberPad @update:value="onUpdateAmount" @submit:value="saveRecordList"/>
        </Layout>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import Tags from '@/components/Money/Tags.vue';
    import NumberPad from '@/components/Money/NumberPad.vue';
    import FormItem from '@/components/Money/FormItem.vue';
    import {Component} from 'vue-property-decorator';
    import Tab from '@/components/Tab.vue';
    import typeList from '@/constants/typelist';
    //import store2 from '@/store/index2.ts';
    window.localStorage.setItem('version','0.0.1');
    @Component({
        components: {Tab, FormItem, NumberPad, Tags}
    })
    export default class Money extends Vue {
        // Declared as computed property setter
        tags=this.$store.state.tagList;
        recordList: RecordItem[]=this.$store.state.recordList;
        typeList=typeList;
        createdDate=new Date();
        record ={
            id:'',
            tag:{},
            notes:'',
            type:'-',
            amount:0,
            createdDate:this.createdDate.toISOString()
        };
        onUpdateTag(value: string[]){
            this.record.tag=value;
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
        onUpdateDate(value: string){
            this.record.createdDate=value;
        }
        saveRecordList(){
            this.$store.commit('createRecord',this.record)
        }
    }
</script>
<style lang="scss">
    .xxx-content {
        display: flex;
        flex-direction: column;
        //justify-content: flex-end;
        overflow: auto;
    }
    .timeWrap{
        padding: 0 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: white;
        >.time{
            width:130px
        }
        .form{
            width:50%;
        }
    }

</style>
<style lang='scss' scoped>
</style>