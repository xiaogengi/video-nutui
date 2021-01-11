<template>
    <div style="width: 95%">
        <a @click="titleHref(item)" v-for="(item, index) in dataList" v-bind:key="index">
            <span class="span-style" >
                {{ item.description }}
            </span>
        </a>
    </div>
</template>

<script>
    export default {
        name: 'CollapseSpan',
        props: {
            'titleHrefProp': {
                type: Function,
                default: function (row) {
                    return row;
                }
            }
        },
        data() {
            return {
                dataList: [
                    {description: '测试1', type: '1'},
                    {description: '测试2', type: '2'},
                    {description: '测试3', type: '3'},
                    {description: '测试4', type: '4'},
                    {description: '测试4', type: '4'},
                    {description: '测试4', type: '4'},
                    {description: '测试4', type: '4'},
                    {description: '测试4', type: '4'},
                ]
            }
        },
        methods: {
            titleHref: function (row) {
                this.titleHrefProp(row);
            }
        }
    }
</script>

<style scoped>
    .span-style {
        border: 1px solid royalblue;
        margin-left: 13px;
        margin-right: 13px;
        margin-top: 105px;
    }
</style>
