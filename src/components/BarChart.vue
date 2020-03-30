<template>
    <div>
        <v-chart :options="getBar(barData)" />
    </div>
</template>

<script lang='ts'>
    import Vue from 'vue'
    import {Component, Prop} from 'vue-property-decorator';
    import ECharts from 'vue-echarts'
    import 'echarts/lib/chart/line'
    import {getBarList, getList} from '@/lib/commonFun';
    import getBar from '@/lib/getBar';
    @Component({
        components: {'v-chart': ECharts}
    })
    export default class BarChart extends Vue{
        @Prop({required:true}) type!: string;
        @Prop({required:true}) month!: number;
        @Prop({required:true}) year!: number;
        @Prop({required:true}) interval!: string;
        getBar=getBar;

        get recordList(){
            return (this.$store.state).recordList;
        }
        get selectedData(){
            const{recordList,year,month,type,interval}=this;
            if(interval==='year'){
                return  getList(recordList,year,type);
            }else {
                return getList(recordList,year,type,month);
            }
        }
        get barData(){
            return  getBarList((this.selectedData),this.interval)
        }
      aAxis(data: BarList){
            return data.map(t=>t.name)
        }
       yAxis(data: BarList){
            return data.map(t=>t.value)
        }
        beforeCreate(){
            this.$store.commit("fetchRecords")
        }
    }
</script>

<style lang='scss' scoped>

</style>