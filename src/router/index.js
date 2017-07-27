import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import rank from 'components/rank/rank'
import search from 'components/search/search'
import singer from 'components/singer/singer'
import recommend from 'components/recommend/recommend'


Vue.use(Router)

export default new Router({
  routes: [
     {
      path: '/',
      redirect:'recommend'
    },
    {
      path: '/rank',
      name: 'rank',
      component: rank
    },
     {
      path: '/search',
      name: 'search',
      component: search
    },
    {
      path: '/singer',
      name: 'singer',
      component: singer
    },
    {
      path: '/recommend',
      name: 'recommend',
      component: recommend
    }
  ]
})
