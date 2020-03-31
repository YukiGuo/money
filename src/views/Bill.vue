<template>
    <div class="wrap">
        <Layout>
            <div class="record">
                <div class="nav">
                    <div class="nav-title">我的账单</div>
                    <div class="type">
                        <vue-datepicker-local v-model="time" format="YYYY-MM" class="time"/>
                        <span>总支出：{{total('-').toFixed(0)}}</span>
                        <span>总收入：{{total('+').toFixed(0)}}</span>
                    </div>
                </div>
                <div v-for="(group,index) in showList" :key="index" class="recordItem">
                    <div class="title">
                        <span> {{ beautify(group.title)}}</span>
                        <span>￥{{group.total.toFixed(2)}}</span>
                    </div>
                    <div
                            v-for="(item,index) in group.items" :key="index"
                            class="item"
                            :class="{income:item.type==='+'}"
                            @click="goEdict(item)"
                    >
                        <Icon class="logo" :name="item.tag.icon"/>
                        <span class="tag">
                               <span>{{item.tag.name}}</span>
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
    import dayjs from 'dayjs';
    import clone from '@/lib/clone';

    @Component
    export default class Bill extends Vue {
        time = new Date();
        get year(){
            return dayjs(this.time.toISOString()).year();
        }
        get month(){
            return dayjs(this.time.toISOString()).month() + 1;
        }
        get recordList() {
            return (this.$store.state as RootState).recordList;
        }
        get selectedList(){
            const{year,month}=this;
         return    this.recordList.filter(t => dayjs(t.createdDate).year() === year).filter(t => dayjs(t.createdDate).month() === month - 1);
        }
        get showList() {
            const {recordList} = this;
            if (recordList.length === 0) {
                return [] as GroupList;
            }
            const newList = clone(this.selectedList!)
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
                    if (item.type === '-') {
                        return sum - item.amount;
                    } else {
                        return sum + item.amount;
                    }
                }, 0);
            });
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

        total(type: string) {
            const typeList = this.selectedList!.filter(t => t.type === type);
            return typeList.reduce((sum, item) => {return sum + item.amount;}, 0);
        }

        beforeCreate() {
            this.$store.commit('fetchRecords');
        }
       goEdict(item: RecordItem){
           this.$router.push({name: 'newLocation',params:{item:JSON.stringify(item)}})
        }
    }
</script>
<style lang='scss' scoped>
    @import '../assets/style/variable.scss';
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
        .nav {
            font-size: 20px;
            >.nav-title{
                background: #fff;
                font-weight: bold;
                padding: 10px 16px;
                margin-bottom: 5px;
                border-radius: 5px;
            }
            > .date {
                font-size: 18px;
                font-weight: 500;
                padding: 10px 0;

                select {
                    border: none;
                    background-color: inherit;
                }
            }

            > .type {
                display: flex;
                justify-content: space-between;
                font-size: 16px;
                color: #444444;
                background-color: white;
                align-items: center;
                margin-top: 8px;
                padding: 5px;
                .time{
                    width:110px
                }
                >span{
                    display: inline-block;
                    padding: 0 10px;
                    font-size: 14px;
                }
            }
        }

        > .recordItem {
            padding: 0 8px;

            > .title {
                display: flex;
                justify-content: space-between;
                line-height: 40px;
                font-weight: bold;
                font-size: 14px;
            }

            > .item {
                font-size: 16px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                background: white;
                margin-bottom: 1px;
                padding:10px 4px;
                text-decoration: none;
                color:inherit;
                > .logo {
                    color: #DF3A01;
                }

                > .tag {
                    margin-right: auto;
                    margin-left: 15px;
                    display: flex;
                    flex-direction: column;
                }

                > .money {
                    display: flex;
                    flex-direction: column;
                    font-size: 16px;
                    color: $colorRed;
                }
            }

            .income {
                > .logo {
                    color: $colorGreen;
                }
                > .money {
                    color: $colorGreen;
                }
            }
        }
    }

</style>
