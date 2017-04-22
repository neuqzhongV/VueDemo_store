import Vue from 'vue'

import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './components/Home.vue'
import Vip from './components/Vip.vue'
import Cart from './components/Cart.vue'
import Search from './components/Search.vue'
import News from './components/News.vue'
import Pics from './components/Pics.vue'

//引入UI
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.use(MintUI)
Vue.use(VueRouter)

const router = new VueRouter({
    routes:[
        {name:'app',path:'/',redirect:'/home'},
        {name:'home',path:'/home',component:Home},
        {name:'vip',path:'/vip',component:Vip},
        {name:'cart',path:'/cart',component:Cart},
        {name:'search',path:'/search',component:Search},
        {name:'news',path:'/news',component:News},
        {name:'pics',path:'/pics',component:Pics}
    ]
})

new Vue({
    el: "#box",
    router,
    render: h=>h(App)
})