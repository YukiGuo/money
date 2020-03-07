<template>
    <div class="wrap">
        <div class="title">
            <router-link to="/label" class="link">
                <Icon name="arrowleft"/>
            </router-link>
            <span>编辑标签</span>
        </div>
        <FormItem
                file-name="标签名"
                placeholder="请输入标签名"
                :value="tag.name"
                @update:value="update"
        />
        <div class="tagWrap">
            <Button @click="remove">
                删除标签
            </Button>
        </div>
    </div>
</template>

<script lang='ts'>
    import Vue from 'vue'
    import {Component} from 'vue-property-decorator';
    import {tagModel} from '@/models/tagModel';
    import FormItem from '@/components/Money/FormItem.vue';
    import Button from '@/components/Button.vue';
    tagModel.fetch();
    @Component({
        components: {Button, FormItem}
    })
    export default class LabelEdict extends Vue{
        tag?: { id: string; name: string };
        created(){
           const id= this.$route.params.id;
            const tags=tagModel.data;
            const tag =tags.filter(item=>(item.id===id))[0];
            if(tag){
              this.tag=tag;
            }else{
                this.$router.replace('/404');
            }
        }
        update(name: string){
            if(this.tag) {
                tagModel.update(this.tag.id, name);
                // alert("修改成功")
            }
        }
        remove(){
            if(this.tag) {
                tagModel.remove(this.tag);
                // alert("删除成功");
                this.$router.replace('/label');
            }

        }
    }
</script>

<style lang='scss' scoped>
    .wrap {
        height: 100vh;
        background-color: #eeeeee;
        .title {
            height: 30px;
            display: flex;
            flex-direction: row;
            padding: 10px 10px;
            background-color: #ffffff;
            margin-bottom: 5px;
          .link{
              color: #333;
              text-decoration: none;
          }
          span {
                flex-grow: 1;
                text-align: center;
            }
        }
        >.tagWrap{
            margin-top:50px ;
            text-align: center;
        }
    }
</style>