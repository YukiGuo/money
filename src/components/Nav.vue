<template>
    <nav>
        <router-link class="item" to="/money" active-class="selected">
            <Icon name ='money' />记账
        </router-link>
        <router-link class="item"  to="/bill" active-class="selected">
            <Icon name ='bill' />明细
        </router-link>
        <router-link  class="item"  to="/label" active-class="selected">
            <Icon name ='label' />标签
        </router-link>
        <router-link  class="item"  to="/statistics" active-class="selected">
            <Icon name ='statistics' />统计
        </router-link>
    </nav>
</template>

<script lang='ts'>
    export default {
        name: 'Nav'
    };

</script>

<style lang='scss' scoped>
    @import '../assets/style/variable.scss';
nav{
    @extend %outerShadow;
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 5px 0;
    > .item{
        text-decoration: none;
        font-size: 14px;
        width: 33.3333%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #8C9098;
    }
    > .item.selected{
        color: $colorBlue;
    }
}
</style>