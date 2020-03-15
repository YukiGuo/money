<template>
    <div>
        <Layout>
            <Tab :list="arr" :value.sync="type" class-prefix="type"/>
            <Tab :list ="arr1" :value.sync="interval" class-prefix="interval"/>
       </Layout>
    </div>
</template>

<script lang='ts'>
    import Vue from 'vue'
    import {Component} from 'vue-property-decorator';
    import Tab from '@/components/Tab.vue';
    @Component({
        components: {Tab}
    })
    export default class Statistics extends Vue{
        type='-';
        interval='day';
        arr=[{value: '-',text: "支出"},{value:'+',text:"收入"}];
        arr1=[{value:'day',text:"按天"},{value: 'week',text: "按周"},{value: "month",text:"按月"}]
    }
</script>
<style lang='scss' scoped>
    ::v-deep .type-tab-item {
        background: white;
        &.selected {
            background-color: #c4c4c4;
            &::after{
               display: none;
            }
        }
    }

</style>