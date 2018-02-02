<template>
	<div class="footer-bar">
		<div class="flex-container">
			<div class="footer-item flex-item logo">
				<ul class="childs">
					<img style="width: 100%;" src="../assets/logoT.png" id="footer-logo"alt="">
				</ul>
			</div>			
			<div class="footer-item flex-item" v-for="item in menuList">
				<div class="title">{{item.title}}</div>
				<ul class="childs">
					<li class="child-item" v-for="child in item.childs">{{child.title}}</li>
				</ul>
			</div>
			<div class="footer-item flex-item erweima">
				<ul class="childs">
					<img id="footer-erweima" src="../assets/erweima.png" alt="">
					<li class="child-item"  style="text-align: center;">官方微信</li>
				</ul>
			</div>
									
		</div>
		<div id="copy">版权所有©海汀顿国际教育  AII Right Reserved</div>	
		<!-- <div class="link">
			{{ $t('concat') }} : 110
		</div> -->
	</div>		
</template>
<script>
	import {MenuService} from '../api/home'

	export default {
		components: {  
        }, 		
		data () {
			return {
				menuList:''
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
	     },
		mounted() {
			this.getMenu();
        }	     
	}
</script>
<style scoped lang="scss" type="text/scss">
	@import "../styles/vars";	
	.footer-bar {
		width: 100%;
		/* min-width:1200px; */
		height: $menu-height*4;
		margin: 0 auto;
		font-size: 0.8rem;
		background:#00522d;
		#copy {
			position: relative;
		    bottom: -162px;
		    text-align: center;
		    width: 100%;
		    background: #044828;
		    height: 30px;
		    line-height: 30px;
		}
		.flex-container {
			width: 80%;
			max-width:900px;
    		margin: 0 auto;
			.footer-item {
				height: $menu-height;
				display: inline-block;
				width:10%;
				line-height: $menu-line-height;
				height:30px;
				line-height: 30px;				
				cursor: pointer;
				color:$main-color-light;
				margin: 0 auto;
				margin-top: 30px;
				text-align: left;
				background: #00522d;
				&.erweima {
					width: 15%;
					max-width:100px;
				}
				&.logo {
					width: 15%;
					max-width:100px;
				}
				.childs {
					.child-item {
						height:30px;
						line-height: 30px;
						color:#fff;
						&:hover {
							color:$main-color-light;
						}
					}
					img#footer-logo {
						width: 100%;
					}
					img#footer-erweima {
						width: 100%;
						
					}					
				}
				title {
										
					&:hover {
							color:$main-color;
						}
				}
			}
			.link {
			    text-align: right;
			    margin-right: 20%;
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
	
</style>