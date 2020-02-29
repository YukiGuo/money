<template>
    <div class="numberPad">
        <div class="output">{{output}}</div>
        <div class="buttons">
            <button @click="inputContent">1</button>
            <button @click="inputContent">2</button>
            <button @click="inputContent">3</button>
            <button @click="remove">删除</button>
            <button @click="inputContent">4</button>
            <button @click="inputContent">5</button>
            <button @click="inputContent">6</button>
            <button @click="clear">清空</button>
            <button @click="inputContent">7</button>
            <button @click="inputContent">8</button>
            <button @click="inputContent">9</button>
            <button @click="ok" class="ok">OK</button>
            <button @click="inputContent" class="zero">0</button>
            <button @click="inputContent">.</button>
        </div>
    </div>
</template>

<script lang='ts'>
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';

    @Component
    export default class NumberPad extends Vue {
        output = '0';

        clear() {
            this.output = '0';
        }

        remove() {
            if (this.output.length === 1) {
                this.output = '0';
            } else {
                this.output = this.output.slice(0, -1);
            }
        }

        ok() {
            return;
        }

        inputContent(event: MouseEvent) {
            //强制指定类型
            const button = (event.target as HTMLButtonElement);
            const input = button.textContent!; //！表示这个值不会为空
            if (this.output.length === 16) {
                return;
            }
            if (this.output === '0') {
                if ('0123456789'.indexOf(input) >= 0) {
                    this.output = input;
                } else if (input === '.') {
                    this.output += input;
                }
                return
            }
            if (this.output.indexOf('.') >= 0 && input === '.') {
                return;
            }

            this.output += input;

        }
    }
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