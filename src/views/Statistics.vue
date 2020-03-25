<template>
    <div>
        <Tab :list="intervalList" :value.sync="interval"/>
        <v-chart :options="bar" class="echarts"/>
        <PieChart :type="type" :month='month'  :year='year'  />
    </div>
</template>

<script lang='ts'>
    import Vue from 'vue'
    import {Component} from 'vue-property-decorator';
    import Tab from '@/components/Tab.vue';
    import intervalList from '@/constants/intervalList';
    import ECharts from 'vue-echarts'
    import 'echarts/lib/chart/line'
    import 'echarts/lib/component/polar';
    import "echarts/lib/chart/pie";
    import "echarts/lib/chart/bar";
    import PieChart from '@/components/PieChart.vue';
    @Component({
        components: {PieChart, Tab, 'v-chart': ECharts}
    })
    export default class Statistics extends  Vue {
        intervalList = intervalList;
        interval = 'month';
        month = 3;
        year = 2020;
        type = '-';
        bar = {
            title: {
                text: '第一个 ECharts 实例'
            },
            // tooltip: {},
            xAxis: {
                type: 'category',
                data: ["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"]
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                name: '销量',
                type: 'line',
                data: [5, 20, 36, 10, 10, 20,50,70,60,90,100,160]
            }]
        };

    }
</script>

<style lang='scss' scoped>
    .echarts {
    width: 100vw;
        height: 100vh;
       border: 1px solid red
    }
</style>