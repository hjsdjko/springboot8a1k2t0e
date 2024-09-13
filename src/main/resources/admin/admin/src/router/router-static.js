import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import xinliyisheng from '@/views/modules/xinliyisheng/list'
    import zixunjilu from '@/views/modules/zixunjilu/list'
    import forum from '@/views/modules/forum/list'
    import zhaomubaoming from '@/views/modules/zhaomubaoming/list'
    import liushouertong from '@/views/modules/liushouertong/list'
    import jiaoyuziyuan from '@/views/modules/jiaoyuziyuan/list'
    import zhaomuxinxi from '@/views/modules/zhaomuxinxi/list'
    import fudaoanpai from '@/views/modules/fudaoanpai/list'
    import jiatinglianxi from '@/views/modules/jiatinglianxi/list'
    import fudaojilu from '@/views/modules/fudaojilu/list'
    import config from '@/views/modules/config/list'
    import zhiyuanzhe from '@/views/modules/zhiyuanzhe/list'


//2.配置路由   注意：名字
export const routes = [{
    path: '/',
    name: '系统首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '系统首页',
      component: Home,
      meta: {icon:'', title:'center', affix: true}
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
	path: '/xinliyisheng',
        name: '心理医生',
        component: xinliyisheng
      }
      ,{
	path: '/zixunjilu',
        name: '咨询记录',
        component: zixunjilu
      }
      ,{
	path: '/forum',
        name: '社区互动',
        component: forum
      }
      ,{
	path: '/zhaomubaoming',
        name: '招募报名',
        component: zhaomubaoming
      }
      ,{
	path: '/liushouertong',
        name: '留守儿童',
        component: liushouertong
      }
      ,{
	path: '/jiaoyuziyuan',
        name: '教育资源',
        component: jiaoyuziyuan
      }
      ,{
	path: '/zhaomuxinxi',
        name: '招募信息',
        component: zhaomuxinxi
      }
      ,{
	path: '/fudaoanpai',
        name: '辅导安排',
        component: fudaoanpai
      }
      ,{
	path: '/jiatinglianxi',
        name: '家庭联系',
        component: jiatinglianxi
      }
      ,{
	path: '/fudaojilu',
        name: '辅导记录',
        component: fudaojilu
      }
      ,{
	path: '/config',
        name: '轮播图管理',
        component: config
      }
      ,{
	path: '/zhiyuanzhe',
        name: '志愿者',
        component: zhiyuanzhe
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
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
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
