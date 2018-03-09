import Vue from 'vue'
import Router from 'vue-router'
import reviewCard from '@/components/reviewCard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'reviewCard',
      component: reviewCard
    }
  ]
})
