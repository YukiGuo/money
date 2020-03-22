<template>
    <div class="wrap">
        <div class="nav">
            <Icon name="arrowleft"/>
            <span>添加支出标签</span>
            <button>保存</button>
        </div>
        <div class="content">
            <label class="name">
                <span>名字：</span>
                <input type="text" placeholder="请输入标签名">
            </label>
            <ul class="iconWrap">
               <li  v-for="(icon,index) in iconList" :key="index"><Icon :name='icon' class="icon"/></li>
            </ul>
        </div>
    </div>
</template>

<script lang='ts'>
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';
    import iconList from '@/constants/iconList';
    import Button from '@/components/Button.vue';

    @Component({
        components: {Button}
    })
    export default class NewLabel extends Vue {
        iconList = iconList.out;
    }
</script>

<style lang='scss' scoped>
    @import '~@/assets/style/variable.scss';

    .nav {
        padding: 10px;
        background: white;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1px;
        >button{
            background: transparent;
            border: solid #DF3A01 1px;
            padding: 2px 6px;
            font-size: 14px;
            color: #DF3A01;
        }
    }

    .content {
        > .name {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: white;
            margin-bottom: 1px;
            padding: 12px 10px;

            > span {
                font-size: 14px;
            }

            > input {
                background: transparent;
                border: none;
                font-size: 14px;
                color: #999;
                margin-right: auto;
                margin-left: 10px;
            }
        }
        >.iconWrap{
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            padding: 16px;
           >li{
               width: 18vw;
               display: flex;
               justify-content: center;
               >.icon{
                   padding: 5px;
                   background: #c4c4c4;
                   border-radius: 50%;
                   color: white;
               }
           }
        }
    }
</style>