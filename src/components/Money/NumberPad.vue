<template>
    <div class="numberPad">
        <div class="output">100</div>
        <div class="buttons">
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>删除</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>清空</button>
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button class="ok">OK</button>
            <button class="zero">0</button>
            <button>.</button>
        </div>
    </div>
</template>

<script lang='ts'>
    export default {
        name: 'NumberPad'
    };
</script>

<style lang='scss' scoped>
    @import '~@/assets/style/variable.scss';
    .numberPad {
        > .output {
            @extend %innerShadow;
            font-size: 36px;
            padding: 9px 16px;
            font-family: Consolas, monospace;
            text-align: right;

        }

        > .buttons {
            @extend %x;
            > button {
                float: left;
                width: 25%;
                height: 64px;
                background-color: transparent;
                border: 0.5px solid #ccc;

                &.ok {
                    height: 128px;
                    float: right;
                }

                &.zero {
                    width: 50%;
                }
            }
        }
    }
</style>