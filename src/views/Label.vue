<template>
    <div>
        <Layout>
            <div class="wrap">
            <ul class="labels">
            <li>
               衣
                  <Icon name="arrow"/>
            </li>
            <li>食
                <Icon name="arrow"/>
            </li>
            <li>住
                <Icon name="arrow"/>
            </li>
            <li>行
                <Icon name="arrow"/>
            </li>
            </ul>
            <button>新建标签</button>
            </div>
        </Layout>

    </div>
</template>

<script lang='ts'>
    export default {
        name: 'Label'
    };
</script>

<style lang='scss' scoped>
    .wrap {
        .labels {
            > li {
                display: flex;
                justify-content: space-between;
                height: 30px;
                margin: 10px 15px 10px 20px;
                border-bottom: 1px solid #ddd;
            }

        }
        > button {
            height: 35px;
            border: none;
            background-color: #333;
            text-align: center;
            margin: 30px auto 0 auto;
            padding: 0 10px;
            color: #fff;
            border-radius: 5px;
        }
    }
</style>