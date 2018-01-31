<template>
	<div class="dynamic">
		<ul>
			<li>
				<div class="img"><img src="../assets/gyqjs/12.png" alt=""><div class="img_bg"></div></div>
				<div class="content">
					<div></div>
					<div></div>
					<p class="mes"><span class="title">我是一个大写的标题</span><br>我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容...</p>
				</div>
			</li>
			<li>
				<div class="img"><img src="../assets/gyqjs/12.png" alt=""><div class="img_bg"></div></div>
				<div class="content">
					<div></div>
					<div></div>
					<p class="mes"><span class="title">我是一个大写的标题</span><br>我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容...</p>
				</div>
			</li>
			<li>
				<div class="img"><img src="../assets/gyqjs/12.png" alt=""><div class="img_bg"></div></div>
				<div class="content">
					<div></div>
					<div></div>
					
					<p class="mes"><span class="title">我是一个大写的标题</span><br>我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容...</p>
				</div>
			</li>									
		</ul>
		
	</div>
</template>
<style scoped lang="scss" type="text/scss">
	.dynamic {
		    width: 100%;
   			margin: 101px auto 50px;
		ul li {
			width: 100%;
		    height: 244px;
		    overflow: hidden;
		    margin-bottom: 4px;
			&:hover{
		    	.img {
					.img_bg {
					    top: 0;
					    left: 0;
					    width: 100%;
					    height: 100%;
					    cursor: pointer;
					}			    		
		    	}
							    	
		    }		   
			.img {
				display: inline-flex;
				width: 720px;
			    height: 244px;
			    position: relative;
				img {   
				    width: 100%;
					height: 100%;
				}
				.img_bg {
				    position: absolute;
				    top: 50%;
				    left: 50%;
				    width: 0;
				    height: 0;
				    z-index: 2;
				    background: url(http://1.rc.xiniu.com/rc/Contents/34939/images/index_cnt_img_bg.png?d=20170721203648374) no-repeat center rgba(0,0,0,0.4);
				    transition: 0.5s all;
				}				
			}
						
			
			.content {
				display: inline-flex;
				position: relative;
			    width: 400px;
			    height: 244px;
			    padding-left: 40px;
    			padding-right: 40px;
			    background-color: #eeeeee;
			    
				.title {
				    width: 100%;
				    height: 50px;
				    line-height: 50px;
				    font-size: 1.2rem;
				    color: #00522d;
				    padding-top:40px;
				}
				.mes{
					height: 30px;
				    line-height: 30px;					
				    padding-top: 10px;
				    text-align: left;
				    font-size: 14px;
				    color: #737373;
				    opacity: 0.8;
				}
			}			

		}
	}
</style>