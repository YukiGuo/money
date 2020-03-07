<template>
<div>
    <label class=note for="note">
        <span class="name">{{this.fileName}}</span>
        <input id="note"
               type="text"
               :placeholder="placeholder"
               :value="value"
               @input="onValueChange($event.target.value)"
        >
    </label>
</div>
</template>

<script lang='ts'>
    import Vue from 'vue'
    import {Component, Prop, Watch} from 'vue-property-decorator';
    @Component
   export default class FormItem extends Vue{
       @Prop({default:''}) value!: string;
       @Prop({required:true}) fileName!: string;
       @Prop(String) placeholder?: string;
        onValueChange(value: string){
           this.$emit('update:value',value)
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