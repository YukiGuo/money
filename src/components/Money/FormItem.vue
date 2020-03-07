<template>
<div>
    <label class=note for="note">
        <span class="name">{{this.fileName}}</span>
        <input id="note" type="text" :placeholder="this.placeholder" v-model="value">
    </label>
</div>
</template>

<script lang='ts'>
    import Vue from 'vue'
    import {Component, Prop, Watch} from 'vue-property-decorator';
    @Component
   export default class FormItem extends Vue{
       value= '';
       @Prop({required:true}) fileName!: string;
       @Prop(String) placeholder?: string;
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
        background-color: white;
        > input {
            padding-left: 5px;
            border: none;
            flex-grow: 1;
        }
    }
</style>