<template>
    <div>
        <button class="createTag" @click="$emit('click','event')">
            <slot />
        </button>
    </div>
</template>

<script lang='ts'>
    import Vue from 'vue'
    import {Component} from 'vue-property-decorator';

    @Component
    export default class Button extends Vue{

    }
</script>

<style lang='scss' scoped>
    .createTag {
        height: 40px;
        border: none;
        background-color: #bbb;
        text-align: center;
        padding: 0 16px;
        color: #fff;
        border-radius: 5px;
        &Wrap{
            text-align: center;
            padding-top: 20px;
        }
    }
</style>