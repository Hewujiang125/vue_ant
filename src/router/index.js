import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import my from '@/components/my'
// import test from '@/components/test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
		{
		  path: '/my',
		  name: 'my',
		  component: my
		}
		// {
    //   path: '/test',
    //   name: 'test',
    //   component: test
    // },


  ]
})
