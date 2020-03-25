<template>
    <div>
<!--        <Tab :list="intervalList" :value.sync="interval"/>-->
<v-chart :options="pie" class="echarts"/>
        <v-chart :options="bar" class="echarts"/>
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
    console.log(ECharts);
    @Component({
        components: {Tab, 'v-chart': ECharts}
    })
    export default class Statistics extends  Vue {
        intervalList = intervalList;
        interval = 'month';
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

        pie= {
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b}: {c} ({d}%)'
            },
            legend: {
                orient: 'vertical',
                left: 10,
                data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
            },
            series: [
                {
                    name: '访问来源',
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
                    data: [
                        {value: 335, name: '直接访问'},
                        {value: 310, name: '邮件营销'},
                        {value: 234, name: '联盟广告'},
                        {value: 135, name: '视频广告'},
                        {value: 1548, name: '搜索引擎'}
                    ]
                }
            ]
        };

    }
</script>

<style lang='scss' scoped>
    .echarts {
    width: 500px;
        height: 500px;
       border: 1px solid red
    }
</style>