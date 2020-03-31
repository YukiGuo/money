<template>
    <div class="wrap" :class="{income:this.type==='+'}">
        <div class="nav">
            <div @click="goBack"> <Icon name="arrowleft" /></div>

            <span>添加{{type==='-'?'支出':'收入'}}标签</span>
            <button @click="create()">保存</button>
        </div>
        <div class="content">
            <label class="name">
                <span>名字：</span>
                <input type="text" placeholder="请输入标签名" v-model="name">
            </label>
            <ul class="iconWrap">
                <li
                        v-for="(item,index) in selectedIconList"
                        :key="index"
                        @click="toggle(item)"
                >
                    <Icon :name='item' class="icon"
                          :class="{selected:icon===item}"
                    />
                </li>
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
        name = '';
        type = '';
        icon = '';
        selectedIconList: string[] = [];

        toggle(item: string) {
            this.icon = item;
        }

        create() {
            const {name, icon, type} = this;
            this.$store.commit('createTag', {name: name, icon: icon, type: type});
        }

        goBack() {
            console.log('xxx');
            this.$router.back();
        }

        created() {
            this.type = this.$route.params.type;
            if (this.type === '-') {
                this.selectedIconList = iconList.out;
            } else {
                this.selectedIconList = iconList.income;
            }
        }
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

        > button {
            background: transparent;
            border: solid $colorRed 1px;
            padding: 2px 6px;
            font-size: 14px;
            color: $colorRed;
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

        > .iconWrap {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            padding: 16px;

            > li {
                width: 18vw;
                display: flex;
                justify-content: center;

                > .icon {
                    padding: 5px;
                    background: #c4c4c4;
                    border-radius: 50%;
                    color: white;

                    &.selected {
                        color: $colorRed;
                        background: white;
                    }
                }
            }
        }
    }

    .income {
        > .nav {
            > button {
                border: solid $colorGreen 1px;
                color: $colorGreen;
            }
        }

        > .content {
            > .iconWrap {
                > li {
                    > .selected {
                        color: $colorGreen;
                        background: white;
                    }
                }
            }
        }

    }
</style>