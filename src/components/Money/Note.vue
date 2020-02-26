<template>
<div>
    <label class=note for="note">
        <span class="name">备注</span>
        <input id="note" type="text" placeholder="在这里备注">
    </label>
</div>
</template>

<script lang='ts'>
    export default {
        name: 'Note'
    };
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