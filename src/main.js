import Vue from 'vue'
import Router from 'vue-router'
import { Collapse, CollapseItem } from '@nutui/nutui';
import NutUI from '@nutui/nutui';
import '@nutui/nutui/dist/nutui.css';
import App from './App.vue'
import home from '@/views/home';
import me from '@/views/me';
import SystemError from '@/views/error/SystemError';
import VideoIng from '@/views/VideoIng';

Vue.config.productionTip = false
Vue.use(Router);

Collapse.install(Vue);
CollapseItem.install(Vue);
NutUI.install(Vue);
const router = new Router({
  routes:[
    // {
    //   path:'/',
    //   name:'主页',
    //   component: App
    // },
    {
      path:'/home',
      name:'首页',
      component: home
    },
    {
      path:'/me',
      name:'我的',
      component: me
    },
    {
      path: '/systemError',
      name: '系统异常',
      component: SystemError
    },
    {
      path: '/video',
      name: '视频播放页',
      component: VideoIng
    }
  ]
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
