<template>
    <div id="nav">
        <hr/>
        <router-link to="/money"> 记账</router-link>
        <router-link to="/statistics"> 统计</router-link>
        <router-link to="/label">
        <svg>
                <use xlink:href="#money"/>
        </svg>
            标签
        </router-link>
    </div>


</template>

<script lang='ts'>
    const importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
    try {importAll(require.context('../assets/icons', true, /\.svg$/));} catch (error) {console.log(error);}
    export default {
        name: 'Nav'
    };

</script>

<style lang='scss' scoped>

</style>