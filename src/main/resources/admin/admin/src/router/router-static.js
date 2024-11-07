import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Board from '@/views/board'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import wupinleibie from '@/views/modules/wupinleibie/list'
    import wupinzulin from '@/views/modules/wupinzulin/list'
    import news from '@/views/modules/news/list'
    import wupinchuzu from '@/views/modules/wupinchuzu/list'
    import aboutus from '@/views/modules/aboutus/list'
    import pingjiaxinxi from '@/views/modules/pingjiaxinxi/list'
    import wupinxinxi from '@/views/modules/wupinxinxi/list'
    import storeup from '@/views/modules/storeup/list'
    import wupinguihai from '@/views/modules/wupinguihai/list'
    import systemintro from '@/views/modules/systemintro/list'
    import yonghu from '@/views/modules/yonghu/list'
    import gonggaoleixing from '@/views/modules/gonggaoleixing/list'
    import discusswupinxinxi from '@/views/modules/discusswupinxinxi/list'
    import gonggaoxinxi from '@/views/modules/gonggaoxinxi/list'
    import config from '@/views/modules/config/list'


//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '系统首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '系统首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/wupinleibie',
        name: '物品类别',
        component: wupinleibie
      }
      ,{
	path: '/wupinzulin',
        name: '物品租赁',
        component: wupinzulin
      }
      ,{
	path: '/news',
        name: '闲置资讯',
        component: news
      }
      ,{
	path: '/wupinchuzu',
        name: '物品出租',
        component: wupinchuzu
      }
      ,{
	path: '/aboutus',
        name: '关于我们',
        component: aboutus
      }
      ,{
	path: '/pingjiaxinxi',
        name: '评价信息',
        component: pingjiaxinxi
      }
      ,{
	path: '/wupinxinxi',
        name: '物品信息',
        component: wupinxinxi
      }
      ,{
	path: '/storeup',
        name: '我的收藏管理',
        component: storeup
      }
      ,{
	path: '/wupinguihai',
        name: '物品归还',
        component: wupinguihai
      }
      ,{
	path: '/systemintro',
        name: '系统简介',
        component: systemintro
      }
      ,{
	path: '/yonghu',
        name: '用户',
        component: yonghu
      }
      ,{
	path: '/gonggaoleixing',
        name: '公告类型',
        component: gonggaoleixing
      }
      ,{
	path: '/discusswupinxinxi',
        name: '物品信息评论',
        component: discusswupinxinxi
      }
      ,{
	path: '/gonggaoxinxi',
        name: '公告信息',
        component: gonggaoxinxi
      }
      ,{
	path: '/config',
        name: '轮播图管理',
        component: config
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/board',
    name: 'board',
    component: Board,
    meta: {icon:'', title:'board'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '系统首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})
const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}
export default router;
