<template>
<div class="home-preview" :style='{"width":"100%","margin":"0px auto","flexDirection":"column","display":"flex"}'>




		


<!-- 商品推荐 -->
<div id="animate_recommendxinliyisheng" class="recommend animate__animated" :style='{"padding":"50px 280px","margin":"0 0 10px","background":"#fff","order":"2"}'>
	<div v-if="false" class="idea recommendIdea" :style='{"padding":"20px","flexWrap":"wrap","background":"#efefef","justifyContent":"space-between","display":"flex"}'>
		<div class="box1" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box2" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box3" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box4" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box5" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box6" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box7" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box8" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box9" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box10" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
	</div>
	
    <div class="title" :style='{"width":"100%","margin":"10px auto","lineHeight":"54px","textAlign":"left"}'>
		<span :style='{"color":"#333333","fontSize":"36px"}'>心理医生推荐</span>
	</div>
	
	
	
	
	
	
	
	
	
	



	<div v-if="xinliyishengRecommend.length" class="list list12 index-pv1 list12xinliyisheng" :style='{"width":"100%","padding":"10px","background":"#fff","height":"auto"}'>
	  <div class="list" :style='{"overflow":"hidden","flexWrap":"wrap","flex":"1","background":"#fff","display":"flex","height":"auto"}'>
	    <div :style='{"width":"22%","margin":"10px 1.5%","position":"relative","height":"auto"}' class="item list-item animation-box" v-for="item,index in xinliyishengRecommend" :key="index" @click="toDetail('xinliyishengDetail', item)">
			<img :name="item.id" :style='{"width":"100%","objectFit":"cover","display":"block","height":"250px"}' v-if="preHttp(item.touxiang)" :src="item.touxiang.split(',')[0]" alt="" />
			<img :name="item.id" :style='{"width":"100%","objectFit":"cover","display":"block","height":"250px"}' v-else :src="baseUrl + (item.touxiang?item.touxiang.split(',')[0]:'')" alt="" />
			<div class="line1" :style='{"width":"100%","padding":"0 10px","lineHeight":"40px","fontSize":"16px","color":"#769589","textAlign":"center"}'>{{item.yishenggonghao}}</div>
			<div class="line1" :style='{"width":"100%","padding":"0 10px","lineHeight":"40px","fontSize":"16px","color":"#769589","textAlign":"center"}'>{{item.yishengxingming}}</div>
	    </div>
	  </div>
	</div>




	
	<div @click="moreBtn('xinliyisheng')" :style='{"border":"0","margin":"10px auto","textAlign":"center","background":"#409EFF","display":"none","width":"auto","lineHeight":"32px"}'>
		<span :style='{"color":"#f5f5f5","fontSize":"12px","display":"inline-block"}'>更多</span>
		<i :style='{"color":"#f5f5f5","fontSize":"12px","display":"inline-block"}' class="icon iconfont icon-gengduo1"></i>
	</div>
	
</div>
<!-- 商品推荐 -->

<!-- 商品推荐 -->
<div id="animate_recommendjiaoyuziyuan" class="recommend animate__animated" :style='{"padding":"50px 280px","margin":"0 0 10px","background":"#fff","order":"2"}'>
	<div v-if="false" class="idea recommendIdea" :style='{"padding":"20px","flexWrap":"wrap","background":"#efefef","justifyContent":"space-between","display":"flex"}'>
		<div class="box1" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box2" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box3" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box4" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box5" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box6" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box7" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box8" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box9" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box10" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
	</div>
	
    <div class="title" :style='{"width":"100%","margin":"10px auto","lineHeight":"54px","textAlign":"left"}'>
		<span :style='{"color":"#333333","fontSize":"36px"}'>教育资源推荐</span>
	</div>
	
	
	
	
	
	
	
	
	
	



	<div v-if="jiaoyuziyuanRecommend.length" class="list list12 index-pv1 list12jiaoyuziyuan" :style='{"width":"100%","padding":"10px","background":"#fff","height":"auto"}'>
	  <div class="list" :style='{"overflow":"hidden","flexWrap":"wrap","flex":"1","background":"#fff","display":"flex","height":"auto"}'>
	    <div :style='{"width":"22%","margin":"10px 1.5%","position":"relative","height":"auto"}' class="item list-item animation-box" v-for="item,index in jiaoyuziyuanRecommend" :key="index" @click="toDetail('jiaoyuziyuanDetail', item)">
			<img :name="item.id" :style='{"width":"100%","objectFit":"cover","display":"block","height":"250px"}' v-if="preHttp(item.ziyuantupian)" :src="item.ziyuantupian.split(',')[0]" alt="" />
			<img :name="item.id" :style='{"width":"100%","objectFit":"cover","display":"block","height":"250px"}' v-else :src="baseUrl + (item.ziyuantupian?item.ziyuantupian.split(',')[0]:'')" alt="" />
			<div class="line1" :style='{"width":"100%","padding":"0 10px","lineHeight":"40px","fontSize":"16px","color":"#769589","textAlign":"center"}'>{{item.ziyuanmingcheng}}</div>
			<div class="line1" :style='{"width":"100%","padding":"0 10px","lineHeight":"40px","fontSize":"16px","color":"#769589","textAlign":"center"}'>{{item.ziyuanleixing}}</div>
	    </div>
	  </div>
	</div>




	
	<div @click="moreBtn('jiaoyuziyuan')" :style='{"border":"0","margin":"10px auto","textAlign":"center","background":"#409EFF","display":"none","width":"auto","lineHeight":"32px"}'>
		<span :style='{"color":"#f5f5f5","fontSize":"12px","display":"inline-block"}'>更多</span>
		<i :style='{"color":"#f5f5f5","fontSize":"12px","display":"inline-block"}' class="icon iconfont icon-gengduo1"></i>
	</div>
	
</div>
<!-- 商品推荐 -->

	
</div>
</template>

<script>
import 'animate.css'
import Swiper from "swiper";

  export default {
    //数据集合
    data() {
      return {
        baseUrl: '',
        newsList: [],
        xinliyishengRecommend: [],
        jiaoyuziyuanRecommend: [],





      }
    },
    created() {
		this.baseUrl = this.$config.baseUrl;
		this.getList();
    },
	mounted() {
		window.addEventListener('scroll', this.handleScroll)
		setTimeout(()=>{
			this.handleScroll()
		},100)
		
		this.swiperChanges()
	},
	beforeDestroy() {
	  window.removeEventListener('scroll', this.handleScroll)
	},
    //方法集合
    methods: {
		swiperChanges() {
			setTimeout(()=>{
			},750)
		},
		recommendIndexClick12(index, name) {
			this['recommendIndex12' + name] = index
			this.getList()
			
			document.querySelectorAll('.recommend .list12' + name + ' .list .item').forEach(el => {
			  el.classList.remove("active")
			})
			setTimeout(() => {
			  document.querySelectorAll('.recommend .list12' + name + ' .list .item').forEach(el => {
			    el.classList.add("active")
			  })
			}, 1);
		},

		listClick14(index, name) {
			this['listIndex14' + name] = index
		},

		handleScroll() {
			let arr = [
				{id:'search',css:'animate__bounce'},
				{id:'about',css:'animate__fadeInLeft'},
				{id:'system',css:'animate__bounceInLeft'},
				{id:'animate_recommendxinliyisheng',css:'animate__fadeInLeft'},
				{id:'animate_recommendjiaoyuziyuan',css:'animate__fadeInLeft'},
				{id:'msgs',css:'animate__bounce'},
				{id:'friendly',css:'animate__bounce'}
			]
			
			for (let i in arr) {
				let doc = document.getElementById(arr[i].id)
				if (doc) {
					let top = doc.offsetTop
					let win_top = window.innerHeight + window.pageYOffset
					// console.log(top,win_top)
					if (win_top > top && doc.classList.value.indexOf(arr[i].css) < 0) {
						// console.log(doc)
						doc.classList.add(arr[i].css)
					}
				}
			}
		},
      preHttp(str) {
          return str && str.substr(0,4)=='http';
      },
		getList() {
			let autoSortUrl = "";
			let data = {}
          autoSortUrl = "xinliyisheng/autoSort";
			data = {
				page: 1,
				limit: 8,
			}
			data['sfsh'] = '是'
			this.$http.get(autoSortUrl, {params: data}).then(res => {
				if (res.data.code == 0) {
					this.xinliyishengRecommend = res.data.data.list;
					
					
					// 商品列表样式五
					
				}
			});
          autoSortUrl = "jiaoyuziyuan/autoSort";
			data = {
				page: 1,
				limit: 8,
			}
			this.$http.get(autoSortUrl, {params: data}).then(res => {
				if (res.data.code == 0) {
					this.jiaoyuziyuanRecommend = res.data.data.list;
					
					
					// 商品列表样式五
					
				}
			});
			
		},
		toDetail(path, item) {
			this.$router.push({path: '/index/' + path, query: {id: item.id}});
		},
		moreBtn(path) {
			this.$router.push({path: '/index/' + path});
		}
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.home-preview {
		// -------- search --------
		.search .select /deep/ .el-input__inner {
			border: 1px solid #ddd;
			border-radius: 4px;
			padding: 0 30px 0 10px;
			color: rgba(64, 158, 255, 1);
			width: 180px;
			font-size: 14px;
			height: 44px;
		}
		
		.search .input /deep/ .el-input__inner {
			border: 1px solid #ddd;
			border-radius: 4px;
			padding: 0 10px;
			color: rgba(64, 158, 255, 1);
			width: 300px;
			font-size: 14px;
			height: 44px;
		}
		// -------- search --------
		.recommend {
			.list3 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list3 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
			}
			
			.list3 .swiper-button-next {
				left: auto;
				right: 10px;
			}
			
			.list3 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.list5 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list5 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
        }
        
        .list5 .swiper-button-next {
				left: auto;
				right: 10px;
			}
			
			.list5 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.list5 {
				.swiper-slide-prev {
					position: relative;
					z-index: 3;
				}
		
				.swiper-slide-next {
					position: relative;
					z-index: 3;
				}
		
				.swiper-slide-active {
					position: relative;
					z-index: 5;
				}
			}
			
			.index-pv1 .animation-box {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				z-index: initial;
			}
			
			.index-pv1 .animation-box:hover {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 10px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
				z-index: 1;
			}
			
			.index-pv1 .animation-box img {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
			}
			
			.index-pv1 .animation-box img:hover {
				transform: rotate(0deg) scale(1.1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
			}
		}
		
		.news {
			.list3 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list3 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
			}
			
			.list3 .swiper-button-next {
				left: auto;
				right: 10px;
			}
			
			.list3 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.list6 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list6 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
			}
			
			.list6 .swiper-button-next {
				left: auto;
				right: 10px;
			}
			
			.list6 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.index-pv1 .animation-box {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				z-index: initial;
			}
			
			.index-pv1 .animation-box:hover {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 10px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
				z-index: 1;
			}
			
			.index-pv1 .animation-box img {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
			}
			
			.index-pv1 .animation-box img:hover {
				transform: rotate(0deg) scale(1.1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
			}
		}
	
		.lists {
			.list3 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list3 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
			}
			
			.list3 .swiper-button-next {
				left: auto;
				right: 10px;
        }
        
        .list3 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.list5 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list5 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
			}
			
			.list5 .swiper-button-next {
            left: auto;
            right: 10px;
			}
			
			.list5 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.list5 {
				.swiper-slide-prev {
					position: relative;
					z-index: 3;
				}
		
				.swiper-slide-next {
					position: relative;
					z-index: 3;
				}
		
				.swiper-slide-active {
					position: relative;
					z-index: 5;
				}
			}
			
			.index-pv1 .animation-box {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				z-index: initial;
			}
			
			.index-pv1 .animation-box:hover {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 10px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
				z-index: 1;
			}
			
			.index-pv1 .animation-box img {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
			}
			
			.index-pv1 .animation-box img:hover {
				transform: rotate(0deg) scale(1.1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
			}
		}
	}
	







	.home-preview .recommend .list12 .tab .item {
				cursor: pointer;
				border: 0;
				padding: 0 20px;
				margin: 0;
				color: #BBC1C4;
				display: flex;
				width: 150px;
				font-size: 16px;
				line-height: 44px;
			}
	
	.home-preview .recommend .list12 .tab .item:hover {
				color: #769589;
			}
	
	.home-preview .recommend .list12 .tab .item.active {
				box-shadow: 0 3px 0 #769589;
				color: #769589;
				border-color: #769589;
				border-width: 0;
				border-style: solid;
			}
	
	.home-preview .recommend .list12 .tab .more {
				cursor: pointer;
				padding: 0px 10px;
				margin: 0 10px;
				color: #BBC1C4;
				background: #fff;
				display: flex;
				line-height: 44px;
				align-items: center;
				min-width: 68px;
			}
	
	.home-preview .recommend .list12 .tab .more:hover {
				color: red;
			}
	
	.home-preview .recommend .list12 .item.active {
	  animation-name: mymove;
	
	  &:nth-of-type(1) {
	    animation-duration: 1s;
	  }
	  &:nth-of-type(2) {
	    animation-duration: 1.2s;
	  }
	  &:nth-of-type(3) {
	    animation-duration: 1.4s;
	  }
	  &:nth-of-type(4) {
	    animation-duration: 1.6s;
	  }
	  &:nth-of-type(5) {
	    animation-duration: 1.8s;
	  }
	  &:nth-of-type(6) {
	    animation-duration: 2s;
	  }
	}
	
	@keyframes mymove
	{
		from {top: 320px;}
		to {top: 0;}
	}



</style>
