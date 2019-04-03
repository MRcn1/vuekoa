// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vant from 'vant';
import 'vant/lib/index.css';
import axios from 'axios'
import {post,fetch,patch,put,postImg} from './config/http'


Vue.use(Vant);
Vue.config.productionTip = false


Vue.prototype.$post=post;
Vue.prototype.$fetch=fetch;
Vue.prototype.$postImg=postImg;
Vue.prototype.$patch=patch;
Vue.prototype.$put=put;


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
