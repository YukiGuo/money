<template>
    <div>
        <Layout>
            <div class="wrap">
                <div class="labels">
                    <router-link class='tagWrap' :to=" `/label/edict/${tag.id}`" v-for="tag in tagList" :key=tag.id >
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
    import {Component} from 'vue-property-decorator';
    import Button from '@/components/Button.vue';
    @Component({
        components: {Button}
    })
    export default class Label extends Vue{
        get tagList(){
          return  this.$store.state.tagList;
        }
        created(){
            this.$store.commit('fetchTags')
        }
        create(){
            const name =window.prompt('请输入标签名');
            if(name){
                this.$store.commit('createTag',name);
            }else{
                alert("请输入标签名")
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