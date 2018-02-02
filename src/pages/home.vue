<template>
	<div id="wrap">
		<div class="container ">
			<div class="menu flex-container">
				<div class="logo">
					<img src="../assets/logoT.png">
				</div>
				<ul class="menu-item flex-item" v-for="item in menuList">
					<router-link :to="item.router"><li class="menu-title">{{item.title}}</li></router-link>
					<ul class="childs">
						<li class="child-item"></li>
					</ul>
				</ul>

				<!-- <div class="lang"><span @click="changeLang('zh_CN')">CN</span><br>
					一<br><span @click="changeLang('en_US')">EN</span></div> -->
			</div>			
		</div>
	
		<transition>
	        <router-view></router-view>
	    </transition>		
		
		<!-- <footerBar></footerBar> -->
	</div>
	
</template>
<script>
	import {MenuService} from '../api/home'
	import {LangService} from '../api/lang'
	
	import footerBar from './footer-bar'

	const myLangService = new LangService()

	export default {
		components: {  
            footerBar
        }, 		
		data () {
			return {
				menuList:'',
				show:false
			}
		},
		beforeRouteEnter(to, from, next){
            next()
        },
        methods:{
			getMenu (){
                MenuService().get().then(res => {

                    let list = this.$router.options.routes
                    this.menuList = res.body.data;
                    //this.menus = this.menuFilter(list, res.body.data)
                })
            }, 
            changeLang (lang){
            	myLangService.saveStorage(lang);
            	myLangService.setDefaultLang();
            }       	
	     },
		mounted() {
			document.getElementsByTagName("body")[0].className="add_body_style";
			this.getMenu();
        }	     
	}
</script>
<style scoped lang="scss" type="text/scss">
	@import "../styles/vars";
	/* #wrap{
		background: #e1eae5;
	} */
	.container {
		display:block;
		position: absolute;
		top: 0px;
		bottom: 0px;
		width: 100%;
		/* min-width:1200px; */
		height: 63px;
		background:#00542d;
		word-break:keep-all; 
		white-space:nowrap;
		text-overflow:ellipsis;			
		.menu {
			width:90%;
			max-width: $menu-width;
			height: $menu-height;
			margin: 0 auto;
			
			.logo {
				position: relative;
				float:left; 
    			width: 153px;
				height:213px;
				background-color: rgba(0, 66, 36, 0.6);
				text-align: center;
				z-index:999;   			
				img {
					margin-top:15%;
					height:75%;
					/* opacity:0.4;
					filter:alpha(opacity=40); */
					
				}
			}
			.menu-item {
				width:12%;
				max-width:140px;
				height: $menu-height;
				/* display: inline-block; */
				
				line-height: $menu-line-height;		
				cursor: pointer;
				&:hover  {
					a {
						color:#8fc31f;
						.menu-title {
							margin: 0 auto;
		    				border-bottom: 3px solid #8fc31f;					
						}							
					}
									
				}
				.menu-title {
					position: relative;
    				bottom: 2px;
    				font-size:1rem;
					
				}
				
			}
			.lang {
				display: inline-block;
				position: relative;
				top: 10px;
			    height: 63px;
			    line-height: 10px;
			    cursor: pointer; 
			    span {
			    	&:hover {
			    		color:#8fc31f;
			    	}
			    }
			}
		}		
	}

	.flex-container {
		display: -webkit-flex;
	    display: flex;
	    -webkit-flex-wrap: wrap;
	    -moz-flex-wrap: wrap;
	    -ms-flex-wrap: wrap;
	    -o-flex-wrap: wrap;
	    flex-wrap: wrap;
	}
	.flex-item {
	    text-align: center;
	}
	.add_body_style {
    	overflow:scroll;
  	}

  	.fade-enter-active, .fade-leave-active {
	  transition: opacity .5s;
	}
	.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
	  opacity: 0;
	}
	bounce-enter-active {
	  animation: bounce-in .5s;
	}
	.bounce-leave-active {
	  animation: bounce-in .5s reverse;
	}
	@keyframes bounce-in {
	  0% {
	    transform: scale(0);
	  }
	  50% {
	    transform: scale(1.5);
	  }
	  100% {
	    transform: scale(1);
	  }
	}	
</style>