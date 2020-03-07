<template>
    <div class="tags">
        <ul>
            <li
                    v-for="tag in data" :key="tag.id"
                    @click="toggle(tag)"
                    :class="{selected: selectedTags.indexOf(tag)>=0}"
            >
                {{tag.name}}
            </li>
        </ul>
        <div class="new">
            <button @click="create">新增标签</button>
        </div>

    </div>
</template>

<script lang='ts'>
    import Vue from 'vue';
    import {Component, Prop} from 'vue-property-decorator';
    import {tagModel} from '@/models/tagModel';

    @Component
    export default class Tags extends Vue {
        @Prop() data: string[] | undefined;
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
                tagModel.create(name)
            }
        }
    }
</script>

<style lang='scss' scoped>
    .tags {
        flex-grow: 1;
        font-size: 14px;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        padding-left: 10px;
        padding-top: 20px;

        > ul {
            display: flex;
            flex-wrap: wrap;
            overflow: auto;
            padding-bottom: 5px;

            > li {
                display: inline-block;
                $h: 24px;
                height: $h;
                line-height: $h;
                border-radius: $h/2;
                background-color: #ddd;
                margin: 3px 10px;
                padding: 0 16px;
                &.selected{
                    background-color: #333;
                    color: white;
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