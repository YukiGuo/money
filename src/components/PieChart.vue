<template>
    <div>
        year:{{year}}
       month: {{month}}
        type:{{type}}
        pieDataSource:{{pieData}}
        <v-chart :options="pie" class="echarts"/>
    </div>
</template>

<script lang='ts'>
    import Vue from 'vue'
    import {Component, Prop} from 'vue-property-decorator';
    import ECharts from 'vue-echarts'
    import "echarts/lib/chart/pie";
    import {getList, getPieList} from '@/lib/commonFun';
      @Component({
        components: {'v-chart': ECharts}
    })
    export default class PieChart extends Vue{
        @Prop({required:true}) type!: string;
        @Prop({required:true}) month!: number;
        @Prop({required:true}) year!: number;
        get recordList(){
            return (this.$store.state).recordList;
        }
        get pieDataSource(){
            const{recordList,year,month,type}=this;
            return getList(recordList,year,month,type);
        }
        get pieData(){
         return   getPieList(this.pieDataSource)
        }
        beforeCreate(){
            this.$store.commit("fetchRecords")
        }
        pie = {
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b}: {c} ({d}%)'
            },
            legend: {
                orient: 'vertical',
                left: 10,
                data: this.pieData.map(t=>t.name)
            },
            series: [
                {
                    name: '分类统计',
                    type: 'pie',
                    radius: ['50%', '70%'],
                    avoidLabelOverlap: false,
                    label: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: '30',
                            fontWeight: 'bold'
                        }
                    },
                    labelLine: {
                        show: false
                    },
                    data:this.pieData
                }
            ]
        };
    }
</script>

<style lang='scss' scoped>

</style>