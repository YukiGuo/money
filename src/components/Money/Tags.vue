<template>
    <div class="tags">
        <ul>
            <li
                    v-for="tag in tagList" :key="tag.id"
                    @click="toggle(tag)"
                    :class="{selected: selectedTags.indexOf(tag)>=0}"
            >
                <Icon :name="tag.icon" class="icon"/>
                <span>{{tag.name}}</span>
            </li>
            <li @click="create">
                <Icon name="add" class="icon"/>
                <span>添加</span>
            </li>
        </ul>
    </div>
</template>

<script lang='ts'>
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';
    import tagArray from '@/constants/tagArray';
    @Component
    export default class Tags extends Vue {
        get tagList() {
            // return  this.$store.state.tagList;
            return tagArray;
        }
        created(){
            this.$store.commit('fetchTags')
        }
        selectedTags: string[] = [];
        toggle(tag: string) {
            const index = this.selectedTags.indexOf(tag);
            if (index >= 0) {
            this.selectedTags.splice(index, 1);
            } else {
                this.selectedTags.push(tag);
            }
            this.$emit('update:value',this.selectedTags)
        }
        create(){
            const name =window.prompt('请输入标签名');
            if(name){
                this.$store.commit('createTag',name);
            }
        }
    }
</script>

<style lang='scss' scoped>
    @import '@/assets/style/variable.scss';
    .tags {
        flex-grow: 1;
        font-size: 14px;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        padding-left: 10px;
        padding-top: 20px;
        background: white;

        > ul {
            display: flex;
            flex-wrap: wrap;
            padding-bottom: 5px;

            > li {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                margin: 3px 10px;
                padding: 0 16px;
                font-size: 12px;

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
                        background: $blueColor;
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
    }
</style>