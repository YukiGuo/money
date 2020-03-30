<template>
    <div class="layoutWrap">
        <div class="content" :class="`${classPrefix&&classPrefix}-content`">
        <slot />
        </div>
        <Nav />
    </div>
</template>

<script lang='ts'>
    export default {
        name: 'Layout',
        props:['classPrefix']
    };
</script>

<style lang='scss' scoped>
    .layoutWrap{
        height: 100vh;
        position: relative;
        overflow:auto;
        display: flex;
        flex-direction: column;
    }
    .content{
        flex-grow: 1;
    }
</style>