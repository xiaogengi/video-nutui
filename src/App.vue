<template>
  <div id="app">
    <router-view/>
    <nut-tabbar
            @tab-switch="tabSwitch2"
            type="card"
            :tabbar-list="tabList2"
            :bottom="true"
    >
    </nut-tabbar>
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
  },
  data() {
    return {
      tabList2:[
        {
          'tabTitle':'首页',
          'curr':true,
          'icon': '../assets/img/home.png',
          // 'num':13,
          'path': 'home'
        },
        {
          'tabTitle':'我的',
          'curr':false,
          'icon':'../img/home.png',
          'path': 'me'
        }
        // ,
        // {
        //   'tabTitle':'系统异常',
        //   'curr':false,
        //   'icon':'more',
        //   'path': 'systemError'
        // }
      ]
    };
  },
  methods: {
    tabSwitch2:function(value, index){
      console.log(value + ' : ' + index);
      this.$router.push(value.path);
    }
  }
}
</script>

<style scoped>
</style>
