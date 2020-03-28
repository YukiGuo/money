<template>
    <div>
        <vue-datepicker-local v-model="time" format="YYYY-MM"/>
        {{type}}------{{interval}}
        <Tab :list="typeList" :value.sync="type"/>
        <Tab :list="intervalList" :value.sync="interval"/>
        <BarChart :type="type"  :month='month'  :year='year' :interval="interval"/>
        <PieChart :type="type" :month='month'  :year='year'  />
    </div>
</template>

<script lang='ts'>
    import Vue from 'vue'
    import {Component} from 'vue-property-decorator';
    import Tab from '@/components/Tab.vue';
    import typeList from '@/constants/typelist';
    import intervalList from '@/constants/intervalList';
    import ECharts from 'vue-echarts'
    import 'echarts/lib/chart/line'
    import 'echarts/lib/component/polar';
    import "echarts/lib/chart/pie";
    import "echarts/lib/chart/bar";
    import PieChart from '@/components/PieChart.vue';
    import BarChart from '@/components/BarChart.vue';
    @Component({
        components: {BarChart, PieChart, Tab, 'v-chart': ECharts}
    })
    export default class Statistics extends  Vue {
        time= new Date();
        typeList=typeList;
        intervalList = intervalList;
        interval = 'year';
        month = 3;
        year = 2020;
        type = '-';
    }
</script>

<style lang='scss' scoped>
    .echarts {
    width: 100vw;
        height: 100vh;
       border: 1px solid red
    }
</style>