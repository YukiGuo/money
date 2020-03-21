<template>
    <div class="wrap">
        <Layout>
            <div class="record">
                <div class="nav">
                    <h3>我的账单</h3>
                    <div class="month">
                      {{day}}
                    </div>
                    <div class="type">
                        <span>支出 ￥3000</span>
                        <span>收入￥7000</span>
                    </div>
                </div>
                <div v-for="(group,index) in list" :key="index" class="recordItem">
                    <div class="title">
                        <span> {{ beautify(group.title)}}</span>
                        <span>￥{{group.total.toFixed(2)}}</span>
                    </div>
                    <div
                            v-for="(item,index) in group.items" :key="index"
                            class="item"
                            :class="{income:item.type==='+'}"
                    >
                        <Icon class="logo" :name="item.tags[0].icon"/>
                        <span class="tag">
                               <span>{{item.tags[0].name}}</span>
                              <span
                                      class="note"
                              >{{item.notes}}</span>
                            </span>
                        <span class="money">
                                <span>{{item.type}} {{item.amount}}</span>
                            </span>
                    </div>
                </div>
            </div>
        </Layout>
    </div>
</template>

<script lang='ts'>
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';
    import Tab from '@/components/Tab.vue';
    import dayjs from 'dayjs';
    import clone from '@/lib/clone';
   const date= dayjs();
   console.log(date);
    @Component({
        components: {Tab}
    })
    export default class Statistics extends Vue {
        type = '-';
        day=date.format("YYYY-M");
        month= dayjs().month();
        year=date.year();
        get recordList() {
            return (this.$store.state as RootState).recordList;
        }

        get list() {
            const {recordList} = this;
            if (recordList.length === 0) {
                return [] as GroupList;
            }
            const newList = clone(recordList)
                .sort((a, b) => dayjs(b.createdDate).valueOf() - dayjs(a.createdDate).valueOf());
            if (newList.length === 0) {
                return [] as GroupList;
            }
            type GroupList = { title: string; items: RecordItem[]; total?: number }[];
            const groupList: GroupList = [{
                title: dayjs(newList[0].createdDate).format('YYYY-MM-DD'),
                items: [newList[0]]
            }];

            for (let i = 1; i < newList.length; i++) {
                const current = newList[i];
                const last = groupList[groupList.length - 1];
                if (dayjs(current.createdDate).isSame(dayjs(last.title), 'day')) {
                    last.items.push(current);
                } else {
                    groupList.push({title: dayjs(current.createdDate).format('YYYY-MM-DD'), items: [current]});
                }
            }
            groupList.map(group => {
                group.total = group.items.reduce((sum, item) => {
                    if(item.type==='-'){
                        return sum - item.amount
                    }else {
                        return sum + item.amount
                    }
                    }, 0);
            })
            return groupList;

        }

        beautify(string: string) {
            // const d =new Date(Date.parse(string));
            // const y= d.getFullYear();
            // const  m =d.getMonth();
            // const dd =d.getDay();
            const day = dayjs(string);
            const today = new Date();
            const oneday = 86400 * 1000;
            // if(y===today.getFullYear() && m===today.getMonth() && dd===today.getDay())
            if (day.isSame(today, 'day'))//day简化
            {
                return '今天';
            } else if (
                day.isSame(today.valueOf() - oneday, 'day')
            ) {
                return '昨天';
            } else if (
                day.isSame(dayjs().subtract(2, 'day'), 'day')
            ) {
                return '前天';
            } else {
                if (day.isSame(today, 'year')) {
                    return day.format('M月D日');
                } else {
                    return day.format('YYYY年M月D日');
                }
            }
        }

        mounted() {
            this.$store.commit('fetchRecords');
            const api = dayjs();
        }
    }
</script>
<style lang='scss' scoped>
    ::v-deep .type-tab-item {
        background: white;
        font-size: 16px;
        height: 30px;

        &.selected {
            background-color: #c4c4c4;

            &::after {
                display: none;
            }
        }
    }
    .record {
        .nav{
            font-size: 20px;
            padding:10px 16px;
            border-bottom: white 4px solid;
            >.month{
                font-size: 18px;
                font-weight: 500;
                padding: 10px 0;
            }
            >.type{
                font-size: 14px;
                color: #444444;
                font-weight: 600;
            }
        }

        > .recordItem {
            padding: 0 16px;
            > .title {
                display: flex;
                justify-content: space-between;
                line-height: 40px;
                font-weight: bold;
                font-size: 18px;
                padding: 0 8px;
            }
            >.item {
                display: flex;
                justify-content: space-between;
                align-items: center;
                background: white;
                margin-bottom: 2px;
                padding: 8px;
                > .logo {
                    font-size: 20px;
                    color:  #DF3A01;
                }

                > .tag {
                    margin-right: auto;
                    margin-left: 15px;
                    display: flex;
                    flex-direction: column;
                    > .note {
                        font-size: 14px;
                        color: #c6c6c6;
                        line-height: 16px;
                        height: 16px;
                    }
                }
                > .money {
                    display: flex;
                    flex-direction: column;
                    font-size: 18px;
                    font-weight: 600;
                    color:  #DF3A01;
                }
            }
            .income{
                >.logo{
                    color:	#2E8B57;
                }
                >.money{
                    color:#2E8B57;
                }
            }
        }
    }
</style>
