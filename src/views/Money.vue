<template>
    <div>
        <Layout class-prefix="xxx">
            <Tags />
            <Note />
            <Types />
            <NumberPad />
        </Layout>
    </div>
</template>

<script lang='ts'>
    import Tags from '@/components/Money/Tags.vue';
    import NumberPad from '@/components/Money/NumberPad.vue';
    import Types from '@/components/Money/Types.vue';
    import Note from '@/components/Money/Note.vue';
    export default {
        name: 'Money',
        components: {Note, Types, NumberPad, Tags}
    };
</script>
<style lang="scss">
    .xxx-content {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        overflow: auto;
    }
</style>
<style lang='scss' scoped>
</style>