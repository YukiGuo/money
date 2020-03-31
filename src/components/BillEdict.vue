<template>
    <div class="wrap">
        <div class="nav">
            <router-link to="/bill" class="link">
                <Icon name="arrowleft"/>
            </router-link>

        </div>
        <div class="itemWrap">
            <div class="item">
                <span class="label">类型</span>
                <span>{{item.type==='-'?'支出':'收入'}}</span>
            </div>
            <div class="item">
                <span class="label">标签</span>
                <span>{{item.tag.name}}</span>
            </div>
            <div class="item">
                <span class="label">金额</span>
                <span>{{item.amount}}</span>
            </div>
            <div class="item">
                <span class="label">日期</span>
                <span>{{formatDate(item.createdDate)}}</span>
            </div>
            <div class="item">
                <span class="label">备注</span>
                <span>{{item.note}} </span>
            </div>
        </div>
        <Button  class="button">删除明细</Button>

    </div>
</template>

<script lang='ts'>
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';
    import Button from '@/components/Button.vue';
    import dayjs from 'dayjs';
    @Component({
        components: {Button}
    })

    export default class BillEdict extends Vue {
        item=[] ;
        created(){
           this.item= JSON.parse(this.$route.params.item)
        }
        formatDate(date: string){
            return dayjs(date).format('YYYY-M-D')
        }
    }
</script>

<style lang='scss' scoped>
    @import '~@/assets/style/variable.scss';

    .wrap {
        display: flex;
        flex-direction: column;
        justify-content: center;
        > .nav {
            padding:  10px 0;
            background: $colorBlue;
            display: flex;
            align-items: center;
            color: white;
            >.link{
                text-decoration: none;
                color: white;
            }
        }
        >.itemWrap {
            > .item {
                background: white;
                font-size: 18px;
                padding: 10px;
                margin-bottom: 2px;

                > .label {
                    font-size: 14px;
                    color: #999999;
                    margin-right: 16px;
                }
            }
        }
        >.button{
         margin: 20px auto 0 auto;

        }
    }

</style>