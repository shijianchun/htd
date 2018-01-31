<template>
  <div>
      <div class="anchor">
        <ul>
          <li v-for="item in items">
            <router-link :to="item.title">{{item.title}}</router-link>
          </li>
        </ul>      
      </div>
      
      <transition name="fade" mode="out-in">
        <HtdIntroduce :imgUrl="url"></HtdIntroduce>
      </transition>    
  </div>
      

</template>

<script>
  import HtdIntroduce from '@/pages/htd-introduce'

  export default {
    components:{
      HtdIntroduce 
    },
    data() {
      return {
       url:'ii',
       items:[
          { id:1,title:"1",url:"/static/gyqjs/htd_itr_1.png"},
          { id:2,title:"2",url:"/static/gyqjs/htd_itr_2.png"},
          { id:3,title:"3",url:"/static/gyqjs/htd_itr_3.png"},
          { id:4,title:"4",url:"/static/gyqjs/htd_itr_4.png"},
       ]
      }
    },
    computed: {  
       imgUrl(){
          return this.items.filter((x) => {
            return x.id == this.$route.params.id
          })
       }
    },     
    mounted () {
        console.log(this.imgUrl);    
        console.log(this.$route.params.id);
        this.url = this.imgUrl.url;
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
    ul {
      li {
        a {
          color:#000;
        }
      }

    }
  }
</style>
