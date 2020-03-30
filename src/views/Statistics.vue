<template>
<Layout class-prefix="chart">
    <div class="wrap">
        <div class="title">账单统计</div>
        <div class="option">
            <Item :list="typeList" :value.sync="type"/>
            <Item :list="intervalList" :value.sync="interval"/>
        </div>
        <div class="date">
            <vue-datepicker-local v-model="time" v-if ="interval==='month'" format="YYYY-MM"/>
            <vue-datepicker-local v-model="time"   format="YYYY" v-else/>
        </div>
        <BarChart :type="type" :month='month' :year='year' :interval="interval" class="echart1"/>
        <PieChart :type="type" :month='month' :year='year' :interval="interval"/>
    </div>
</Layout>
</template>

<script lang='ts'>
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';
    import Tab from '@/components/Tab.vue';
    import typeList from '@/constants/typelist';
    import intervalList from '@/constants/intervalList';
    import ECharts from 'vue-echarts';
    import 'echarts/lib/chart/line';
    import 'echarts/lib/component/polar';
    import 'echarts/lib/chart/pie';
    import 'echarts/lib/chart/bar';
    import PieChart from '@/components/PieChart.vue';
    import BarChart from '@/components/BarChart.vue';
    import dayjs from 'dayjs';
    import Item from '@/components/Item.vue';
    import Layout from '@/components/Layout.vue';
    @Component({
        components: {Item, BarChart, PieChart, Tab, 'v-chart': ECharts,Layout}
    })
    export default class Statistics extends Vue {
        time = new Date();
        typeList = typeList;
        intervalList = intervalList;
        interval = 'month';
        type = '-';

        get month() {
            return dayjs(this.time.toISOString()).month() + 1;
        }

        get year() {
            return dayjs(this.time.toISOString()).year();
        }

    }
</script>

<style lang='scss' scoped>
    .chart-content {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        overflow: auto;
        >.wrap{
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
        }
        .title{
            background: #fff;
            font-weight: bold;
            padding: 10px 16px;
            margin-bottom:5px;
            border-radius: 5px;
        }
        .option {
            display: flex;
            justify-content: space-between;
            margin-bottom: 5px;
        }
        .date{
            background: #fff;
            padding: 5px 10px;
            margin-bottom: 5px;
            font-size: 14px;
        }
        .echart1{
            border-bottom: 1px solid #cccccc;
        }
    }

::v-deep .echarts{
    background: #fff;
    width: 100vw;
    height:60vw;
    margin: auto;
    padding: 10px 0;
}
</style>