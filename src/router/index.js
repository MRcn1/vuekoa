import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
    routes: [
        // {
        //     path: '/HelloWorld',
        //     name: 'HelloWorld',
        //     component: HelloWorld
        // },
        {
            path: '/',
            name: 'ShoppingMall',
            component(resolve) {
                require(['../page/ShoppingMall'], resolve)
            }
        },
        {
            path: '/register',
            name: 'ShoppingMall',
            component(resolve) {
                require(['../page/register'], resolve)
            }
        },
    ]
})