<template>
    <div class="tags">
        <ul>
            <li>衣</li>
            <li>食</li>
            <li>住</li>
            <li>行</li>
            <li>衣</li>
            <li>食</li>
            <li>住</li>
            <li>行</li>
            <li>衣2hhhhhhhhhhh</li>
            <li>食2</li>
            <li>住2</li>
            <li>行2</li>
            <li>哈哈哈哈</li>
            <li>哈哈哈哈</li>
            <li>哈哈哈哈</li>
            <li>哈哈哈哈</li>
            <li>哈哈哈哈</li>
            <li>哈哈哈哈</li>
            <li>哈哈哈哈</li>
            <li>哈哈哈哈</li>
            <li>哈哈哈哈</li>
            <li>哈哈哈哈</li>
        </ul>
        <div class="new">
            <button>新增标签</button>
        </div>

    </div>
</template>

<script lang='ts'>
    export default {
        name: 'Tags'
    };
</script>

<style lang='scss' scoped>
    .tags {
        flex-grow: 1;
        font-size: 14px;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        padding-left: 10px;
        padding-top: 20px;
        > ul {
            display: flex;
            flex-wrap: wrap;
            overflow: auto;
            padding-bottom: 5px;
            > li {
                display: inline-block;
                $h: 24px;
                height: $h;
                line-height: $h;
                border-radius: $h/2;
                background-color: #ddd;
                margin: 3px 10px;
                padding: 0 16px;
            }
        }
        > .new {
            padding: 10px 10px;
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
</style>