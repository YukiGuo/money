<template>
    
    <div class="wrap">
        <div class="title">
            <Icon name="arrowleft"/>
            <span>编辑标签</span></div>
        <div class="change"><span>标签名 </span>
            <label for="label">
                <input type="text" id ='label' placeholder="输入标签名">
            </label>

        </div>
    </div>
</template>

<script lang='ts'>
    export default {
        name: 'LabelChange'
    };
</script>

<style lang='scss' scoped>
    .wrap {
        height: 100vh;
        background-color: #eeeeee;
        > .title {
            height: 30px;
            display: flex;
            justify-content: right;
            align-items: center;
            padding: 10px 5px;
            background-color: #ffffff;
            > span {
                flex-grow: 1;
                text-align: center;
            }
        }
        > .change{
            background-color: #ffffff;
            margin-top: 10px;
            padding: 10px;
            font-size: 14px;
            > label > input{
               border: none;
                padding-left: 10px;
            }
        }
    }
</style>