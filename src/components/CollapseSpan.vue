<template>
    <div style="width: 95%">
        <a :href="item.description" v-for="(item, index) in dataList" v-bind:key="index">
            <span class="span-style" >
                {{ item.description }}
            </span>
        </a>
    </div>
</template>

<script>
    export default {
        name: 'CollapseSpan',
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
