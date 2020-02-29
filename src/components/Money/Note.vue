<template>
<div>
    <label class=note for="note">
        <span class="name">备注</span>
        <input id="note" type="text" placeholder="在这里备注" v-model="value">
    </label>
</div>
</template>

<script lang='ts'>
    import Vue from 'vue'
    import {Component, Watch} from 'vue-property-decorator';
    @Component
   export default class Note extends Vue{
       value= '';
       @Watch('value')
        onValueChange(oldValue: string,newValue: string){
           this.$emit('update:value',newValue)
        }
   }
</script>

<style lang='scss' scoped>
    .note {
        display: block;
        align-items: center;
        padding-left: 20px;
        min-height: 50px;
        line-height: 50px;
        background: #eee;

        > input {
            padding-left: 5px;
            border: none;
            flex-grow: 1;
            background: #eee;
        }
    }
</style>