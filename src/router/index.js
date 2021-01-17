import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {path: '/', redirect: '/login'},
    {path: '/login' , component: Login},
    {path: '/Home' , component: Home}
  ]
})
// 挂载路由导航守卫
router.beforeEach((to, from, next) => {
  // to and from are both route objects. must call `next`.
  // 如果访问的是login页  就直接放行
  // 获取token
  // 如果 这个token不存在 根据这个在进行强制跳转  否则直接放行
  if(to.path === '/login') return next()
  const tokenStr = window.sessionStorage.getItem('token')
  if(!tokenStr) return next('/login')
  next()
})


export default router
