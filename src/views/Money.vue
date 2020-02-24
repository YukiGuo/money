<template>
    <div>
        <Layout>
            <div class="tags">
                <div class="xxx"></div>
                <ul>
                    <li>衣</li>
                    <li>食</li>
                    <li>住</li>
                    <li>行</li>
                </ul>
                <div class="new">
                    <button>新增标签</button>
                </div>

            </div>
            <label class=label for="note">
                <span class="name">备注</span>
                <input id="note" type="text" placeholder="在这里备注">
            </label>
            <ul class="type">
                <li class="selected">支出</li>
                <li class="">收入</li>
            </ul>
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
        </Layout>
    </div>
</template>

<script lang='ts'>
    export default {
        name: 'Money'
    };
</script>

<style lang='scss' scoped>
    @import '../assets/style/variable.scss';
    .type {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        font-size: 24px;

        > li {
            position: relative;
            height: 64px;
            width: 50vw;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #bbb;

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

    .numberPad {
        /*width: 100vw;*/
        /*display: flex;*/
        /*flex-direction: row;*/
        /*flex-wrap: wrap;*/
        /*justify-content: center;*/
        /*align-items: center;*/
        > .output {
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
    .tags {
        font-size: 14px;
        display: flex;
        flex-direction: column;
        padding-left: 10px;

        > .xxx {
            min-height: 100px;
        }

        > ul {
            display: flex;

            > li {
                display: inline-block;
                $h: 24px;
                height: $h;
                line-height: $h;
                border-radius: $h/2;
                background-color: #ddd;
                margin: 0 10px;
                padding: 0 16px;
            }
        }

        > .new {
            padding: 16px 10px;

            > button {
                border: none;
                border-bottom: solid 1px;
                background: transparent;
                text-align: left;
                padding: 0 3px;
                color: #999;
            }
        }
    }

    .label {
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