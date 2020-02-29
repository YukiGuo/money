<template>
    <div>
        <ul class="type">
            <li  @click="change('-')" :class="type==='-'&& 'selected'">支出</li>
            <li @click="change('+')" :class="type==='+'&& 'selected'">收入</li>
        </ul>
    </div>
</template>

<script lang='js'>
    export default {
        name: 'Types',
        data(){
            return{
                type:'-'
            }
        },
        methods:{
            change(type) {
                if(type !== '-' && type !== '+'){
                    console.log('错误')
                }
                   this.type=type;
                   console.log(this.type)
                    }
        }
    };
</script>


<style lang='scss' scoped>
    @import '~@/assets/style/variable.scss';

    .type {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        > li {
            position: relative;
            height: 64px;
            width: 50vw;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #bbb;
            font-size: 24px;

            &.selected::after {
                content: '';
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
                height: 4px;
                background: #8a8a8a;
            }
        }
    }
</style>