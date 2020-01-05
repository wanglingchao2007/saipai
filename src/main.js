// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//vant 组件
import Vant from "vant"
import "vant/lib/index.css"
Vue.use(Vant)

import axios from "axios"
import VueAxios from "vue-axios"
Vue.use(VueAxios,axios)

// //搜索框
// import { Search } from 'vant';
// Vue.use(Search);

// //轮播
// import { Swipe, SwipeItem } from 'vant';
// Vue.use(Swipe).use(SwipeItem);
// import { Lazyload } from 'vant';
// // options 为可选参数，无则不传
// Vue.use(Lazyload);
// //倒计时
// import { CountDown } from 'vant';
// Vue.use(CountDown);
// //图标
// import { Icon } from 'vant';
// Vue.use(Icon);
// //标签栏
// import { Tabbar, TabbarItem } from 'vant';
// Vue.use(Tabbar).use(TabbarItem);
// Vue.config.productionTip = false
// //侧边导航
// import { Sidebar, SidebarItem } from 'vant';
// Vue.use(Sidebar);
// Vue.use(SidebarItem);
// //宫格
// import { Grid, GridItem } from 'vant';
// Vue.use(Grid).use(GridItem);
// //索引栏
// import { IndexBar, IndexAnchor } from 'vant';
// Vue.use(IndexBar).use(IndexAnchor);
// //NavBar 导航栏
// import { NavBar } from 'vant';
// Vue.use(NavBar);
// //提交订单栏
// import { SubmitBar } from 'vant';
// Vue.use(SubmitBar);

// //商品卡片
// import { Card } from 'vant';
// Vue.use(Card);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
