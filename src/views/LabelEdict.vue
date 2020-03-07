<template>
    <div class="wrap">
        <div class="title">
            <router-link to="/label">
                <Icon name="arrowleft"/>
                <span>编辑标签</span>
            </router-link>
        </div>
        <FormItem file-name="标签名" placeholder="请输入标签名"/>
    </div>
</template>

<script lang='ts'>
    import Vue from 'vue'
    import {Component} from 'vue-property-decorator';
    import {tagModel} from '@/models/tagModel';
    import FormItem from '@/components/Money/FormItem.vue';
    tagModel.fetch();
    @Component({
        components: {FormItem}
    })
    export default class LabelEdict extends Vue{
        created(){
           const id= this.$route.params.id;
            const tags=tagModel.data;
            const tag =tags.filter(item=>(item.id===id));
            if(tag){
              console.log(tag)
            }else{
                this.$router.replace('/404');
            }


        }
    }
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