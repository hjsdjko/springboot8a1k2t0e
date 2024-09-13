import VueRouter from 'vue-router'

//引入组件
import Index from '../pages'
import Home from '../pages/home/home'
import Login from '../pages/login/login'
import Register from '../pages/register/register'
import Center from '../pages/center/center'
import Forum from '../pages/forum/list'
import ForumAdd from '../pages/forum/add'
import ForumDetail from '../pages/forum/detail'
import MyForumList from '../pages/forum/myForumList'
import Storeup from '../pages/storeup/list'
import payList from '../pages/pay'

import zhiyuanzheList from '../pages/zhiyuanzhe/list'
import zhiyuanzheDetail from '../pages/zhiyuanzhe/detail'
import zhiyuanzheAdd from '../pages/zhiyuanzhe/add'
import liushouertongList from '../pages/liushouertong/list'
import liushouertongDetail from '../pages/liushouertong/detail'
import liushouertongAdd from '../pages/liushouertong/add'
import xinliyishengList from '../pages/xinliyisheng/list'
import xinliyishengDetail from '../pages/xinliyisheng/detail'
import xinliyishengAdd from '../pages/xinliyisheng/add'
import zixunjiluList from '../pages/zixunjilu/list'
import zixunjiluDetail from '../pages/zixunjilu/detail'
import zixunjiluAdd from '../pages/zixunjilu/add'
import fudaoanpaiList from '../pages/fudaoanpai/list'
import fudaoanpaiDetail from '../pages/fudaoanpai/detail'
import fudaoanpaiAdd from '../pages/fudaoanpai/add'
import fudaojiluList from '../pages/fudaojilu/list'
import fudaojiluDetail from '../pages/fudaojilu/detail'
import fudaojiluAdd from '../pages/fudaojilu/add'
import jiaoyuziyuanList from '../pages/jiaoyuziyuan/list'
import jiaoyuziyuanDetail from '../pages/jiaoyuziyuan/detail'
import jiaoyuziyuanAdd from '../pages/jiaoyuziyuan/add'
import zhaomuxinxiList from '../pages/zhaomuxinxi/list'
import zhaomuxinxiDetail from '../pages/zhaomuxinxi/detail'
import zhaomuxinxiAdd from '../pages/zhaomuxinxi/add'
import zhaomubaomingList from '../pages/zhaomubaoming/list'
import zhaomubaomingDetail from '../pages/zhaomubaoming/detail'
import zhaomubaomingAdd from '../pages/zhaomubaoming/add'
import jiatinglianxiList from '../pages/jiatinglianxi/list'
import jiatinglianxiDetail from '../pages/jiatinglianxi/detail'
import jiatinglianxiAdd from '../pages/jiatinglianxi/add'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}

//配置路由
export default new VueRouter({
	routes:[
		{
      path: '/',
      redirect: '/index/home'
    },
		{
			path: '/index',
			component: Index,
			children:[
				{
					path: 'home',
					component: Home
				},
				{
					path: 'center',
					component: Center,
				},
				{
					path: 'pay',
					component: payList,
				},
				{
					path: 'forum',
					component: Forum
				},
				{
					path: 'forumAdd',
					component: ForumAdd
				},
				{
					path: 'forumDetail',
					component: ForumDetail
				},
				{
					path: 'myForumList',
					component: MyForumList
				},
				{
					path: 'storeup',
					component: Storeup
				},
				{
					path: 'zhiyuanzhe',
					component: zhiyuanzheList
				},
				{
					path: 'zhiyuanzheDetail',
					component: zhiyuanzheDetail
				},
				{
					path: 'zhiyuanzheAdd',
					component: zhiyuanzheAdd
				},
				{
					path: 'liushouertong',
					component: liushouertongList
				},
				{
					path: 'liushouertongDetail',
					component: liushouertongDetail
				},
				{
					path: 'liushouertongAdd',
					component: liushouertongAdd
				},
				{
					path: 'xinliyisheng',
					component: xinliyishengList
				},
				{
					path: 'xinliyishengDetail',
					component: xinliyishengDetail
				},
				{
					path: 'xinliyishengAdd',
					component: xinliyishengAdd
				},
				{
					path: 'zixunjilu',
					component: zixunjiluList
				},
				{
					path: 'zixunjiluDetail',
					component: zixunjiluDetail
				},
				{
					path: 'zixunjiluAdd',
					component: zixunjiluAdd
				},
				{
					path: 'fudaoanpai',
					component: fudaoanpaiList
				},
				{
					path: 'fudaoanpaiDetail',
					component: fudaoanpaiDetail
				},
				{
					path: 'fudaoanpaiAdd',
					component: fudaoanpaiAdd
				},
				{
					path: 'fudaojilu',
					component: fudaojiluList
				},
				{
					path: 'fudaojiluDetail',
					component: fudaojiluDetail
				},
				{
					path: 'fudaojiluAdd',
					component: fudaojiluAdd
				},
				{
					path: 'jiaoyuziyuan',
					component: jiaoyuziyuanList
				},
				{
					path: 'jiaoyuziyuanDetail',
					component: jiaoyuziyuanDetail
				},
				{
					path: 'jiaoyuziyuanAdd',
					component: jiaoyuziyuanAdd
				},
				{
					path: 'zhaomuxinxi',
					component: zhaomuxinxiList
				},
				{
					path: 'zhaomuxinxiDetail',
					component: zhaomuxinxiDetail
				},
				{
					path: 'zhaomuxinxiAdd',
					component: zhaomuxinxiAdd
				},
				{
					path: 'zhaomubaoming',
					component: zhaomubaomingList
				},
				{
					path: 'zhaomubaomingDetail',
					component: zhaomubaomingDetail
				},
				{
					path: 'zhaomubaomingAdd',
					component: zhaomubaomingAdd
				},
				{
					path: 'jiatinglianxi',
					component: jiatinglianxiList
				},
				{
					path: 'jiatinglianxiDetail',
					component: jiatinglianxiDetail
				},
				{
					path: 'jiatinglianxiAdd',
					component: jiatinglianxiAdd
				},
			]
		},
		{
			path: '/login',
			component: Login
		},
		{
			path: '/register',
			component: Register
		},
	]
})
