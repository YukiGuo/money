<template>
    <div>
        <Layout>
            <Tab :list="typeList" :value.sync="type" class-prefix="type"/>
            <Tab :list ="intervalList" :value.sync="interval" class-prefix="interval"/>
       </Layout>
    </div>
</template>

<script lang='ts'>
    import Vue from 'vue'
    import {Component} from 'vue-property-decorator';
    import Tab from '@/components/Tab.vue';
    import typeList from '@/constants/typelist';
    import intervalList from '@/constants/intervalList';
    @Component({
        components: {Tab}
    })
    export default class Statistics extends Vue{
        type='-';
        interval='day';
        typeList=typeList;
        intervalList= intervalList
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