<template> 
    <transition-group name="fade"> 
        <div class="home-slide" v-if="show" key="slide">  
            <swiper :options="swiperOption" ref="mySwiper">  
                <!-- <swiper-slide v-for="item in items">  
                </swiper-slide>   -->
                <swiper-slide class="item" v-bind:style="styleObject"><img v-bind:style="imgObject" src="../assets/gyqjs/1.png" ></swiper-slide>
    		    <swiper-slide class="item" v-bind:style="styleObject">
                <img v-bind:style="imgObject" src="../assets/gyqjs/2.png" ></swiper-slide>
    		    
    		    <swiper-slide class="item" v-bind:style="styleObject"><img v-bind:style="imgObject" src="../assets/gyqjs/4.png"></swiper-slide>
                <!-- 这是轮播的小圆点 -->  
                <div class="swiper-pagination" slot="pagination"></div>  
            </swiper>  
        </div> 
        <dynamicNews key="news"></dynamicNews>
        <footerBar key="foot"></footerBar>
    </transition-group> 

</template>

<script>  
	import 'swiper/dist/css/swiper.css'
    import { swiper, swiperSlide } from 'vue-awesome-swiper' 

    import dynamicNews from './dynamic-news.vue'
    import footerBar from './footer-bar'

    export default { 
        components: {  
            swiper,  
            swiperSlide,
            dynamicNews ,
            footerBar 
        },  
        data() {  
            return {  
                swiperOption: {   
                notNextTick: true, 
                /*watchSlidesProgress : true, */
                /*loop:true,*/
                autoplay: 1000,
                autoplay: {
                    disableOnInteraction: false,
                },
                speed:500,
             /*   autoplayDisableOnInteraction: false,
                disableOnInteraction: false,*/
/*                observer:true,
                observeParents:true,*/
                pagination: {
		            el: '.swiper-pagination',
		            bulletActiveClass: 'my-bullet-active',
                    bulletClass: 'my-bullet',
		            clickable :true
		        },  
                /*slidesPerView: 'auto',  */
                    onSlideChangeEnd: swiper => {  
                        //这个位置放swiper的回调方法  
                        this.page = swiper.realIndex+1;  
                        this.index = swiper.realIndex; 
                    }  
                },                
                styleObject: {
                    height: ''
                },
                imgObject: {

                },
                 show: true
                          
            }  
        }, 
        computed: {  
            swiper() {  
              return this.$refs.mySwiper.swiper;  
            }
        }, 
        mounted () {    
            this.swiper.pagination.bullets.css({'background':'#00522d','width':'13px','height':'13px','opacity':'1'}); 
            this.setImgWH();
            window.addEventListener('resize', this.handleResize);
            this.show = true;
        } ,
        beforeDestroy: function () {
            window.removeEventListener('resize', this.handleResize);
        }, 
        methods: {
            handleResize (event) {
                this.setImgWH();
            } ,
            setImgWH () {
                this.styleObject.height = (document.documentElement.clientWidth*832)/1920 + 'px';
            }         
        }
  
    }  
</script>  
<style scoped lang="scss" type="text/scss"> 
	.home-slide {
        position: relative;
        top: 63px;
		display: table;
        table-layout: fixed;
        width: 100%;
        /* min-width:1200px; */
        z-index:1;
		.item{
			display: table-cell;
            vertical-align: middle;
            width: 100%;
            /* min-width:1200px; */
            overflow: hidden;
			img{
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                /* min-width: 1200px; */
			}		
		}	
	}
    .fade-enter-active, .fade-leave-active {
       transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
       opacity: 0;
    }
		
</style>
<style lang="scss" type="text/scss"> 
	
	.my-bullet-active {
		width:40px!important;
		border-radius:10px!important;
        cursor: pointer;

	}		
    .my-bullet {
        display: inline-block;
        margin: 0 4px;
        border-radius: 100%;
        background:#00522d;
        width:13px;
        height:13px;
        opacity:1;
        cursor: pointer;
    }       	
	
		
</style>    