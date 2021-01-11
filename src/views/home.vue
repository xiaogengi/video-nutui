<template>
    <div>
        <!-- 通知栏 -->
        <nut-noticebar
                :closeMode="true">
<!--            @click="hello"-->
            {{ printMsg }}
        </nut-noticebar>
        <!-- 搜索框 -->
        <nut-searchbar
                v-model="keyWord"
                placeText="请输入自定义文案"
                @submit="search"
                @blur="blurFun"
                ref="myInput"
        ></nut-searchbar>
        <!-- 今日推荐 -->
        <nut-swiper
                direction="horizontal"
                :swiperData="dataImgItem"
                :lazyLoad="true"
                :paginationVisible="true"
                :loop="true"
                :autoPlay="3000"
                ref="demo5"
        >
            <div  v-for="(item,index) in dataImgItem" :key="index"  class="nut-swiper-slide ">
                <img :data-src="item.imgSrc"   style="max-width:100%; max-height:100%;width: 99.9%;" class="nut-img-lazyload"/>
            </div>

        </nut-swiper>
        <!-- 隐藏标签 -->
        <nut-collapse v-model="videoTitle" :accordion="true">
            <nut-collapse-item title="选择类型" :name="1">
                <!-- 地址相关 -->
                <v-collapse-span ref="collapseSpan" :titleHrefProp="titleHrefProp"></v-collapse-span>
            </nut-collapse-item>
            <nut-collapse-item title="隐藏" :name="0" v-show="false">
                <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2646036715,400043701&fm=26&gp=0.jpg" style="max-width:100px; max-height:100px"/>
            </nut-collapse-item>
        </nut-collapse>
        <!-- 视频列表 -->
        <v-video-list ref="videoList"></v-video-list>
    </div>
</template>

<script>
    import CollapseSpan from '@/components/CollapseSpan';
    import VideoList from '@/components/VideoList';
    export default {
        name: 'home',
        components: {
            'v-collapse-span': CollapseSpan,
            'v-video-list': VideoList
        },
        data() {
            return {
                keyWord: '',
                dataItem: [],
                dataImgItem: [],
                videoTitle: [0, 1],
                videoTitleLog: [
                    {id: 1, vid: 1, description: '测试1'},
                    {id: 2, vid: 1, description: '测试2'},
                    {id: 3, vid: 1, description: '测试3'},
                    {id: 4, vid: 1, description: '测试4'}
                    ],
                printMsg: '测试通知！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！'
            };
        },
        mounted(){
            //设置获取焦点
            this.$nextTick(function() {
                this.$refs.myInput.focus()
            })
            // 动态滚动图片
            setTimeout(()=>{
                this.dataItem = [{name:1},{name:2},{name:3},{name:4}];
                this.dataImgItem = [
                    {imgSrc:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2646036715,400043701&fm=26&gp=0.jpg'},
                    {imgSrc:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2137349379,2204571142&fm=26&gp=0.jpg'},
                    {imgSrc:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fcdn.duitang.com%2Fuploads%2Fitem%2F201405%2F22%2F20140522103749_TeSju.jpeg&refer=http%3A%2F%2Fcdn.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1612614625&t=c905a4d126443a626968b09298420854'},
                    {imgSrc:'//m.360buyimg.com/mobilecms/s843x843_jfs/t1/27233/9/354/82863/5c090a0eEe2a350d8/aaa6686ce133e364.jpg'}
                ];
            },300)
        },
        methods: {
            blurFun: function(value) {
                console.log(value);
                console.log('您已失去焦点！');
                this.search(value);
            },
            search: function(value) {
                //点击键盘中的’搜索‘时，失去焦点
                this.$refs.myInput.blur()
                console.log('搜索 ： ' + value)
            },
            change: function (val) {
                console.log('change : ' + this.videoTitleLog.filter(function (element) {
                    return val == element.vid;
                }));
            },
            titleHrefProp: function (row) {
                console.log(row);
                this.$refs.videoList.$emit('getView', row.type);
            }
        }
    }
</script>

<style scoped>

</style>
