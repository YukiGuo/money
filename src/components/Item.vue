<template>
    <ul class="tab">
        <li
                v-for="item in list" :key="item.value"
                class="tab-item"
                :class="isClass(item)"
                @click="select(item)"
        >
            {{item.text}}

        </li>
    </ul>
</template>

<script lang='ts'>
    import Vue from 'vue'
    import {Component,Prop} from 'vue-property-decorator';
    type dataSource={
        value: string; text: string;
    }
    @Component
    export default class Tab extends Vue{
        @Prop({required:true}) list!: [];
        @Prop(String) readonly value!: string;
        @Prop(String) readonly classPrefix!: string;
         isClass(item: dataSource){
             return {
                 selected:this.value=== item.value,
                 [this.classPrefix + '-tab-item']:this.classPrefix
             }
         }
        select(item: dataSource) {
          const  type=item.value;
            if (type !== '-' && type !== '+') {
                console.log('错误')
            }
            this.$emit('update:value',item.value);
        }
    }
</script>

<style lang='scss' scoped>
    @import '~@/assets/style/variable.scss';
     .tab {
        width:50vw;
        background: white;
        margin-right: 5px;
        padding:5px 10px;
        display: flex;
        justify-content: space-around;
         border-radius: 5px;
        > .tab-item {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 60px;
            height: 26px;
            background: #ccc;
            color: #fff;
            border-radius: 5px;
            font-size: 14px;
            &.selected{
                background: teal;
                color: #fff;
                font-weight: bold;
            }
        }
    }
</style>