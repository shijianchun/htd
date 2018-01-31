<template>
	<div class="footer-bar">
		<div class="menu-item" v-for="item in menuList">
			<div class="menu-title">{{item.title}}</div>
			<div class="childs">
				<div class="child-item" v-for="child in item.childs">{{child.title}}</div>
			</div>
		</div>
		<div class="link">
			{{ $t('concat') }} : 110
		</div>
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
		height: $menu-height*3;
		margin: 0 auto;
		background:#00522d;
		.menu-item {
			height: $menu-height;
			display: inline-block;
			margin-right:3%;
			line-height: $menu-line-height;
			cursor: pointer;
			color:#a5ca5a;
		}
		.link {
		    text-align: right;
		    margin-right: 20%;
		}
	}		
	
</style>