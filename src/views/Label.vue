<template>
    <div>
        <Layout>
            <div class="wrap">
                <Tab :list="typeList" :value.sync="type"/>
                <div class="labels">
                    <router-link
                            class='tagWrap'
                            :to=" `/label/edict/${tag.id}`"
                            v-for="tag in tagList" :key=tag.id
                            :class="{income:tag.type==='+'}"
                    >
                          <Icon :name="tag.icon" class="icon" />
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
    import {Component, Prop} from 'vue-property-decorator';
    import Button from '@/components/Button.vue';
    import tagArray from '@/constants/tagArray';
    import Tab from '@/components/Tab.vue';
    import typeList from '@/constants/typelist';
    @Component({
        components: {Button,Tab}
    })
    export default class Label extends Vue{
        typeList=typeList;
        type='-';
        get tagList(){
      //    return  this.$store.state.tagList;
            return tagArray.filter(t=>t.type===this.type);
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
                    color: #333;
                    margin-right: auto;
                    margin-left: 16px;
                }
            }
            }
        .icon{
            color: #DF3A01;
        }
        > .createWrap{
      text-align: center;
            margin-top: 40px;
        }
        .income {
            > .icon {
                color: #2E8B57;
            }
        }
    }
</style>