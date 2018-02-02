<template >
  <div>
      <div class="anchor">
        <ul>
          <li v-for="item in items" v-bind:class="{ active: item.show }">
            <router-link :to="item.to">{{item.title}}</router-link>
          </li>
        </ul>      
      </div>
      
      <transition-group ref="imgUrlPage" v-bind:name="changeName" >
        <HtdIntroduce :imgUrl="items[0].url" v-if="items[0].show" key="1" @mousewheel.native="handleWhool"></HtdIntroduce>
        <HtdIntroduce :imgUrl="items[1].url" v-if="items[1].show" key="2" @mousewheel.native="handleWhool"></HtdIntroduce>
        <HtdIntroduce :imgUrl="items[2].url" v-if="items[2].show" key="3" @mousewheel.native="handleWhool"></HtdIntroduce>
        <HtdMap v-if="items[3].show" key="4" @mousewheel.native="handleWhool"></HtdMap>
      </transition-group>    
  </div>
      

</template>

<script>
  import HtdIntroduce from '@/pages/htd-introduce'
  import HtdMap from '@/pages/htd-map'

  export default {
    components:{
      HtdIntroduce,
      HtdMap
    },
    data() {
      return {
       url:'',
       timer:0,
       changeName:'slide-back',
       items:[
          { id:1,title:"品牌简介",url:"/static/gyqjs/htd_itr_1.png",show:false,to:'1'},
          { id:2,title:"文化与理念",url:"/static/gyqjs/htd_itr_2.png",show:false,to:'2'},
          { id:3,title:"CEO寄语",url:"/static/gyqjs/htd_itr_3.png",show:false,to:'3'},
          { id:4,title:"园所分布",url:"/static/gyqjs/4.png",show:false,to:'4'}
       ]
      }
    },
    computed: {  
       imgUrl(){
          return this.items.filter((x) => {
            return x.id == this.$route.params.id
          })
       },
      imgPage() {  
        return this.$refs.imgUrlPage;  
      }       
    },     
    mounted () {
      /*  console.log(this.imgUrl[0].url);    
        console.log(this.$route.params.id);*/
        this.rendImg(0,this.$route.params.id);
        window.addEventListener('scroll', this.handleScroll)
    },
    watch: {
     // 如果路由有变化，会再次执行该方法
     "$route"(to, from){
         /*if (!this.map[to.path]) {
            this.map[to.path] = +new Date() + 1;
          }
          if (!this.map[from.path]) {
            this.map[from.path] = +new Date();
          }*/

          if (to.path.replace('/htd/') > from.path.replace('/htd/')) {
            this.changeName = 'slide-forward';
          } else {
            this.changeName = 'slide-back'
          }         
          this.rendImg(from.path,to.path);
     }
    },
    methods:{
      rendImg(from,to){
          
        let _to = to.replace('/htd/','');        
        if(from==0){
            this.items[_to-1].show = true;  
        }else {
          /*this.url = this.imgUrl[0].url;
          console.log(this.items);*/
          let _from = from.replace('/htd/','');
          this.items[_from-1].show = false;
          this.items[_to-1].show = true;             
        }
                
      },
      handleWhool(e) {

        if(this.timer==0){
          this.timer = 1;
          const _this = this;
          setTimeout(function(){
            _this.timer = 0;
          },1000);
        }else {
          return;
        }
        if(e.deltaY > 0){
          console.log(this.$route.params.id);
          if(0<this.$route.params.id&&this.$route.params.id<this.items.length){
            this.$router.push({path:`/htd/${this.$route.params.id-0+1}`})
          }
          
        }else {
          if(1<this.$route.params.id&&this.$route.params.id<=this.items.length){
            this.$router.push({path:`/htd/${this.$route.params.id-0-1}`})
          }
        }
      }
    }

  }
</script>
<style scoped lang="scss" type="text/scss">
  .anchor {
    position: relative;
    top:300px;
    left:100px;
    width:100px;
    height:auto;
    z-index: 999;
    ul {
      li {
        list-style-type: disc;
        text-align: left;
        height: 40px;
        font-size: 1.3rem;
        width: 200px;
        color: #000;
        line-height: 40px;
        transition: all 1s ease;
        a {
          color:#000;
        }
        &:hover {
          color:#00542d;
          /* font-size: 1.5rem; */
          a {
            color:#00542d;
          }          
        }
        &.active {
          color:#00542d;
          font-size: 1.5rem;
          a {
            color:#00542d;
          }             
        }
      }

    }
  }

  .slide-forward-enter {
    transform: translateY(100%);
  }
  .slide-forward-enter-active {
    transition: all 0.8s ease-in-out;
  }
  .slide-forward-leave-active {
    transform: translateY(-100%);
    transition: all  0.8s ease-in-out;
  }


  .slide-back-enter {
    transform: translateY(-100%);
  }
  .slide-back-enter-active {
    transition: all 0.8s ease-in-out;
  }
  .slide-back-leave-active {
    transform: translateY(100%);
    transition: all  0.8s ease-in-out;
  }

</style>
