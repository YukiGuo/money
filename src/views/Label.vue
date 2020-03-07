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
                <div class="createTagWrap">
                     <button class="createTag" @click="create">新建标签</button>
                </div>
            </div>
        </Layout>

    </div>
</template>

<script lang='ts'>
    import Vue from 'vue';
    import {tagModel} from '@/models/tagModel';

    const tags =tagModel.fetch();
    console.log(tags);
    export default class Label extends Vue{
        tags=tags;
        create(){
            const name =window.prompt('请输入标签名');
           if(name){
               const message =tagModel.create(name);
               if(message=== "重复"){
                   alert("标签名重复了")
               }else {
                   tagModel.create(name)
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

        }
        .createTag {
            height: 40px;
            border: none;
            background-color: #bbb;
            text-align: center;
            padding: 0 16px;
            color: #fff;
            border-radius: 5px;
           &Wrap{
               text-align: center;
               padding-top: 20px;
           }
        }
</style>