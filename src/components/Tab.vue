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
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
         .tab-item {
             position: relative;
             height: 56px;
             width: 50vw;
             display: flex;
             align-items: center;
             justify-content: center;
             font-size: 18px;
             &.selected {
                 font-weight: bold;
             }

             &.selected::after {
                 content: '';
                 position: absolute;
                 bottom: 0;
                 left: 0;
                 width: 100%;
                 height: 3px;
                 background: $colorBlue;
             }
         }
    }
</style>