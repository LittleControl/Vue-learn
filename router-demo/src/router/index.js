import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Header from '@/views/Header'
import Footer from '@/views/Footer'
import List from '@/views/List'
import Saying from '@/views/Saying'
import Detail from '@/views/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/header',
      /* 
        [vue-router] Named Route 'Header' has a default child route. 
        When navigating to this named route (:to="{name: 'Header'"), 
        the default child route will not be rendered. 
        Remove the name from this route and use the name of the default child route for named links instead.
        这是因为我们为一级路由设置了默认的子路由，实际是访问了设置的子路由，所以把一级路由的name属性去掉即可。
      */
      // name: 'Header',
      component: Header,
      children: [
        {
          path: 'list',
          name: 'List',
          component: List
        },
        {
          path: 'saying',
          // name: 'Saying',
          component: Saying,
          children: [
            {
              path: '/header/saying/details/:id',
              name: 'Detail',
              component: Detail
            },
            // {
            //   path: '',
            //   redirect: ''
            // }
          ]
        },
        {
          path: '',
          redirect: 'list'
        }
      ]
    },
    {
      path: '/footer',
      name: 'Footer',
      component: Footer
    }
  ]
})
