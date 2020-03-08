<template>
    <div>
        <Layout>
            <div class="wrap">
                <div class="labels">
                    <router-link class='tagWrap' :to=" `/label/edict/${tag.id}`" v-for="tag in tags" :key=tag.id >
                           <span>{{tag.name}}</span>
                        <Icon name="arrowright"/>
                    </router-link>
                </div>
                <div class="createWrap">
                    <Button @click="create" >
                        新建标签
                    </Button>
                </div>

            </div>
        </Layout>

    </div>
</template>

<script lang='ts'>
    import Vue from 'vue';
    import {tagModel} from '@/models/tagModel';
    import {Component} from 'vue-property-decorator';
    import Button from '@/components/Button.vue';

 tagModel.fetch();
    @Component({
        components: {Button}
    })
    export default class Label extends Vue{
        tags=window.tagList;
        create(){
            const name =window.prompt('请输入标签名');
           if(name){
               const message =tagModel.create(name);
               if(message=== "重复"){
                   alert("标签名重复了")
               }else if(message==="成功"){
                   alert("添加成功")
               }
           }
        }
    }
</script>

<style lang='scss' scoped>
    .wrap {
        .labels {
            background-color: #fff;
            > .tagWrap {
                text-decoration: none;
                display: flex;
                justify-content: space-between;
                min-height: 30px;
                line-height: 30px;
                padding: 5px 15px;
                border-bottom: 1px solid #ddd;
                color: #999999;
                > span {
                    color: #333
                }
            }
            }
        > .createWrap{
      text-align: center;
            margin-top: 40px;
        }
    }
</style>