<template>
    <div class="numberPad">
        <div class="output">{{output}}</div>
        <div class="buttons">
            <button @click="inputContent" class="border-1px-left">1</button>
            <button @click="inputContent" class="border-1px-left">2</button>
            <button @click="inputContent" class="border-1px-left">3</button>
            <button @click="remove">删除</button>
            <button @click="inputContent" class="border-1px-top border-1px-left">4</button>
            <button @click="inputContent" class="border-1px-top border-1px-left">5</button>
            <button @click="inputContent" class="border-1px-top border-1px-left">6</button>
            <button @click="clear" class="border-1px-top">清空</button>
            <button @click="inputContent" class="border-1px-top border-1px-left">7</button>
            <button @click="inputContent" class="border-1px-top border-1px-left">8</button>
            <button @click="inputContent" class="border-1px-top border-1px-left">9</button>
            <button @click="ok" class="ok border-1px-top">OK</button>
            <button @click="inputContent" class="zero border-1px-top border-1px-left">0</button>
            <button @click="inputContent" class="border-1px-top border-1px-left">.</button>
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
            if(parseFloat(this.output)<=0){
                alert('金额不能为0');
                return
            }else{
                this.$emit('update:value',this.output);
                this.$emit('submit:value', this.output );
                this.output='0'
            }

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
        .border-1px-top::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            width: 200%;
            height: 1px;
            background: #ccc;
            transform: scale(0.5);
            transform-origin: left top;
        }

        .border-1px-left::after {
            content: '';
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            width: 1px;
            height: 200%;
            background: #ccc;
            transform: scale(0.5);
            transform-origin: left top;
        }

        > .output {
            font-size: 30px;
            padding: 4px 16px;
            font-family: Consolas, monospace;
            text-align: right;
        }

        > .buttons {
            @extend %x;

            > button {
                position: relative;
                float: left;
                width: 25%;
                height: 50px;
                background-color: white;
                border: none;
                font-size: 16px;
                &.ok {
                    height: 100px;
                    float: right;
                }

                &.zero {
                    width: 50%;
                }
            }
        }
    }
</style>