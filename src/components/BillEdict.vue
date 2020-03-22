<template>
    <div class="wrap">
        <div class="nav">
            <Icon name="arrowleft"/>
            <Icon name="kk"/>
        </div>
        <div class="itemWrap">
            <div class="item">
                <span class="label">类型</span>
                <span>收入</span>
            </div>
            <div class="item">
                <span class="label">金额</span>
                <span>5000</span>
            </div>
            <div class="item">
                <span class="label">日期</span>
                <span>2020年03月21日</span>
            </div>
            <div class="item">
                <span class="label">备注</span>
                <span> </span>
            </div>
        </div>
    </div>
</template>

<script lang='ts'>
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';

    @Component
    export default class BillEdict extends Vue {
    }
</script>

<style lang='scss' scoped>
    @import '~@/assets/style/variable.scss';

    .wrap {
        padding: 0 10px;

        > .nav {
            padding: 16px 10px;
            background: $blueColor;
            display: flex;
            align-items: center;
            color: white;
        }
        >.itemWrap {
            > .item {
                background: white;
                font-size: 18px;
                padding: 16px;
                margin-bottom: 2px;

                > .label {
                    font-size: 14px;
                    color: #999999;
                    margin-right: 16px;
                }
            }
        }
    }

</style>