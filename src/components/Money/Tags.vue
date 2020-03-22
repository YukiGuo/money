<template>
    <div class="tags">
        <ul>
            <li
                    v-for="tag in tagList" :key="tag.id"
                    @click="toggle(tag)"
                    :class="{selected: tag===selectedTag}"
            >
                <Icon :name="tag.icon" class="icon"/>
                <span>{{tag.name}}</span>
            </li>
            <li >
                <router-link :to=" `/label/new/${this.type}`" class="newTag">
                <Icon name="add" class="icon"/>
                <span>添加</span>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script lang='ts'>
    import Vue from 'vue';
    import {Component, Prop} from 'vue-property-decorator';
    import tagArray from '@/constants/tagArray';
    @Component
    export default class Tags extends Vue {
        @Prop({required: true}) type!: string;
        get tagList() {
            return  this.$store.state.tagList.filter(item => item.type === this.type);
            //return tagArray.filter(item => item.type === this.type);
        }
        beforeCreate(){
            this.$store.commit('fetchTags')
        }
        // get selectedTag(){
        //    return  this.tagList[0];
        // }
        // set selectedTag(a){
        //     this.selectedTag=a
        // }
      selectedTag: Tag=this.tagList[0];
        toggle(tag: Tag) {
            this.selectedTag=tag;
                this.$emit('update:value',this.selectedTag);
        }
        // create(){
        //     const name =window.prompt('请输入标签名');
        //     if(name){
        //         this.$store.commit('createTag',name);
        //     }
        // }
    }
</script>

<style lang='scss' scoped>
    @import '~@/assets/style/variable.scss';
    .tags {
        flex-grow: 1;
        font-size: 14px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        padding-top: 10px;
        background: white;

        > ul {
            display: flex;
            flex-wrap: wrap;
            padding-bottom: 5px;

            > li {
                width: 15vw;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                margin-left: 4vw;
                margin-top: 5px;
                font-size: 13px;
                > .icon {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 25px;
                    width: 25px;
                    background: #F0F0F0;
                    border-radius: 50px;
                    color: #8C9098;
                    margin-bottom: 8px;
                }

                &.selected {
                    .icon {
                        color: white;
                        background: $colorBlue;
                    }
                }
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
        .newTag{
            text-decoration: none;
            color: #8C9098;
        }
    }
</style>