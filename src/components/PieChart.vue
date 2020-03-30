<template>
    <div>
        <v-chart :options="getPie(this.pieData)" class="echarts"/>
    </div>
</template>

<script lang='ts'>
    import Vue from 'vue'
    import {Component, Prop} from 'vue-property-decorator';
    import ECharts from 'vue-echarts'
    import "echarts/lib/chart/pie";
    import {getList, getPieList} from '@/lib/commonFun';
    import getPie from '@/lib/getPie';
      @Component({
        components: {'v-chart': ECharts}
    })
    export default class PieChart extends Vue {
          @Prop({required: true}) type!: string;
          @Prop({required: true}) month!: number;
          @Prop({required: true}) year!: number;
          @Prop({required: true}) interval!: string;
          getPie=getPie;
          get recordList() {
              return (this.$store.state).recordList;
          }
          get selectedData() {
              const {recordList, year, month, type, interval} = this;
              if (interval === 'year') {
                  return getList(recordList, year, type);
              } else {
                  return getList(recordList, year, type, month);
              }
          }
          get pieData() {
              return getPieList((this.selectedData))
          }

          beforeCreate() {
              this.$store.commit("fetchRecords")
          }
      }
</script>

<style lang='scss' scoped>

</style>