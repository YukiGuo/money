<template>
    <div>
        <Layout>
            <Tab :list="typeList" :value.sync="type" class-prefix="type"/>
            <Tab :list="intervalList" :value.sync="interval" class-prefix="interval"/>
            <ul class="record">
                <li v-for="(group,index) in result" :key="index">
                    <h3 class="title"> {{group.title}}</h3>
                    <ol>
                        <li v-for="(item,index) in group.items" :key="index">
                            <span class="tag">{{item.tags[0].name}}</span>
                            <span class="notes">无{{item.notes}}</span>
                            <span class="money">￥{{item.amount}}</span>
                        </li>
                    </ol>
                </li>
            </ul>
        </Layout>
    </div>
</template>
<style lang='scss' scoped>
    ::v-deep .type-tab-item {
        background: white;

        &.selected {
            background-color: #c4c4c4;

            &::after {
                display: none;
            }
        }
    }

    ::v-deep .interval-tab-item {
        height: 48px;
    }

    .record {
        > li {

            > .title {
                   line-height: 40px;
                   padding: 0 10px;
            }
            >ol{
                >li{
            background: white;
                    min-height: 35px;
                    margin-bottom: 2px;
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    align-items: center;
                    padding: 0 10px;
                    >.notes{
                      margin-right: auto;
                        margin-left: 8px;
                    }
                }
            }
        }
    }
</style>
<script lang='ts'>
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';
    import Tab from '@/components/Tab.vue';
    import typeList from '@/constants/typelist';
    import intervalList from '@/constants/intervalList';

    @Component({
        components: {Tab}
    })
    export default class Statistics extends Vue {
        type = '-';
        interval = 'day';
        typeList = typeList;
        intervalList = intervalList;

        get recordList() {
            return (this.$store.state as RootState).recordList;
        }

        get result() {
            const {recordList} = this;
            type hashTableValue = {
                title: string; items: RecordItem[][];
            }
            const hashTable: { [key: string]: hashTableValue } = {};
            for (let i = 0; i < recordList.length; i++) {
                const [date, time] = recordList[i].createdDate!.split('T');
                hashTable[date] = hashTable[date] || {title: date, items: []};
                console.log(date);
                hashTable[date].items.push(recordList[i]);

            }
            console.log(hashTable);
            return hashTable;
        }

        mounted() {
            this.$store.commit('fetchRecords');
        }

    }
</script>
