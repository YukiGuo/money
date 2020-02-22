<template>
    <div class="wrap">
        <slot/>
        <div class="content"> </div>
        <Nav />
    </div>
</template>

<script lang='ts'>
    export default {
        name: 'Layout'
    };
</script>

<style lang='scss' scoped>
    .wrap{
        height:100vh;
        overflow:auto;
        display: flex;
        flex-direction: column;
    }
    .content{
        flex-grow: 1;
    }
</style>