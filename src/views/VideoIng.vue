<template>
    <div>
        <nut-navbar @on-click-back="back" @on-click-title="title" :leftShow="true" :rightShow="false">title</nut-navbar>
        <nut-video :sources="sources" :options="options4"></nut-video>
    </div>
</template>

<script>
    export default {
        name: "VideoIng",
        data() {
            return {
                sources: [],
                options4: {
                    controls: true,
                    poster: 'https://img10.360buyimg.com/ling/s640x356_jfs/t1/96045/31/13848/43886/5e5e35ffE68170c74/861a6394e38810f0.png',
                }
            }
        },
        mounted() {
            this.sources.push({src: 'https://storage.jd.com/about/big-final.mp4?Expires=3730193075&AccessKey=3LoYX1dQWa6ZXzQl&Signature=ViMFjz%2BOkBxS%2FY1rjtUVqbopbJI%3D', type: 'video/mp4'});
            console.log(this.$route.query.id);
        },
        methods: {
            back: function(){
                window.history.back(-1);
                window.history.back(-1);
            },
            title: function(){
                alert('header头部， 点击title')
            },
            more: function(){
                alert('header头部， 点击更多')
            }
        }
    }
</script>

<style scoped>

</style>
