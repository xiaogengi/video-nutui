<template>
    <div>
        <div v-for="(item, index) in dataList" :key="index" :title="item.title" style="align-content: center;align-content: center;display: inline-block;margin-left: 20px">
            <a href="#" @click="videoHref(item.id)">
                <span style="width: 150px;">
                <h3 style="display: block;text-align: center;width: 99.9%" :title="item.title.length > 10 ? item.title : ''">{{item.title.length > 10 ? item.title.substring(0, 5) + '...' : item.title}}</h3>
                <img v-bind:src="item.imgPath" alt=""  style="max-width:250px; max-height:90px;width: 150px;height: 80px">
            </span>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "VideoList",
        data() {
            return {
              dataList: [
                  {id: 1, imgPath: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2646036715,400043701&fm=26&gp=0.jpg', title: '提示文字111111111111111111'},
                  {id: 2, imgPath: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2646036715,400043701&fm=26&gp=0.jpg', title: '提示文字2'},
                  {id: 3, imgPath: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2646036715,400043701&fm=26&gp=0.jpg', title: '提示文字3'},
                  {id: 4, imgPath: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2646036715,400043701&fm=26&gp=0.jpg', title: '提示文字4'},
                  {id: 5, imgPath: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2646036715,400043701&fm=26&gp=0.jpg', title: '提示文字5'},
                  {id: 5, imgPath: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2646036715,400043701&fm=26&gp=0.jpg', title: '提示文字5'},
                  {id: 5, imgPath: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2646036715,400043701&fm=26&gp=0.jpg', title: '提示文字5'},
                  {id: 5, imgPath: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2646036715,400043701&fm=26&gp=0.jpg', title: '提示文字5'}
              ]
            };
        },
        methods: {
            videoHref: function (id) {
                console.log(id);
                this.$router.push({path: '/video', query: {id: id}});
            }
        }
    }
</script>

<style scoped>

</style>
