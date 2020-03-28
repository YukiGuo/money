<template>
    <div>
        type:{{type}}-------- {{interval}}
        <v-chart :options="bar" class="echarts"/>
    </div>
</template>

<script lang='ts'>
    import Vue from 'vue'
    import {Component, Prop} from 'vue-property-decorator';
    import ECharts from 'vue-echarts'
    import 'echarts/lib/chart/line'
    import {getList, getBarList} from '@/lib/commonFun';
    @Component({
        components: {'v-chart': ECharts}
    })
    export default class BarChart extends Vue{
        @Prop({required:true}) type!: string;
        @Prop({required:true}) month!: number;
        @Prop({required:true}) year!: number;
        @Prop({required:true}) interval!: string;

        get recordList(){
            return (this.$store.state).recordList;
        }
        get barDataSource(){
            const{recordList,year,month,type}=this;
                return getList(recordList,year,month,type);
        }
        get barData(){
            return   getBarList((this.barDataSource)!,this.interval)
        }
        beforeCreate(){
            this.$store.commit("fetchRecords")
        }
       bar = {
            xAxis: {
                type: 'category',
                data: this.barData.map(t=>t.name)
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data:  this.barData.map(t=>t.value),
                type: 'line'
            }]
        };
    }
</script>

<style lang='scss' scoped>

</style>