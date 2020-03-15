<template>
    <div>
        <Layout>
            <Tab :list="typeList" :value.sync="type" class-prefix="type"/>
            <Tab :list="intervalList" :value.sync="interval" class-prefix="interval"/>
            <ul class="record">
                <li v-for="(group,index) in result" :key="index">
                    <h3 class="title"> {{ beautify(group.title)}}</h3>
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
    import dayjs from 'dayjs';

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
                hashTable[date].items.push(recordList[i]);
            }
            return hashTable;
        }
      beautify(string: string){
          // const d =new Date(Date.parse(string));
          // const y= d.getFullYear();
          // const  m =d.getMonth();
          // const dd =d.getDay();
          const day=dayjs(string);
          const today=new Date();
          const oneday =86400*1000;
          // if(y===today.getFullYear() && m===today.getMonth() && dd===today.getDay())
          if(day.isSame(today,'day'))//day简化
          {return "今天"}else if(
            day.isSame(today.valueOf()-oneday,'day')
          ){
              return "昨天"
          }else if(
            day.isSame(dayjs().subtract(2,'day'),'day')
          ){
              return "前天"
          }else{
              if(day.isSame(today,'year')) {
                  return day.format("M月D日")
              }else{
                  return day.format("YYYY年M月D日")
              }
          }
      }
        mounted() {
            this.$store.commit('fetchRecords');
            const api= dayjs();
            console.log(api);
        }

    }
</script>
