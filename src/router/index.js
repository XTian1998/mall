import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Home = () => import ('../views/home/Home')
const Category= () => import ('../views/category/Category')
const Cart = () => import ('../views/shopcart/Shopcart')
const Profile = () => import ('../views/profile/Profile')
const Detail = () => import('../views/detail/Detail')

const routes = [
    {
      path: '',
      redirect: '/home'
    },
    {
      path: '/category',
      component: Category
    },
    {
      path: '/cart',
      component: Cart
    },
    {
      path: '/profile',
      component: Profile
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/detail/:iid',
      component: Detail
    },
  ]

const router = new Router({
    routes,
    mode: 'history'
})

export default router

