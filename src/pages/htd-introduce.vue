<template>
    <div class="htd-wraper">
      <div  class="introduce">
        <img v-bind:src="url" alt="">
      </div>
    </div>
</template>

<script>

  export default {
    data() {
      return {
        imgs:[
          {url:'../assets/gyqjs/htd_itr_1.png',title:'biaoti1'},
          {url:'../assets/gyqjs/htd_itr_2.png',title:'biaoti1'},
          {url:'../assets/gyqjs/htd_itr_3.png',title:'biaoti1'}
        ]
      }
    },
    props: ['imgUrl'],
    computed: {  
      
    },     
    mounted () {    
      document.getElementsByTagName("body")[0].className="add_body_style";
    }

  }
</script>
<style scoped lang="scss" type="text/scss">
  .htd-wraper {
    position: fixed;
    top: 63px;
    z-index: -1;
    .introduce {
        img {
          width:100%;
        }
    }   
  }
  
  .add_body_style {
    overflow:hidden;
  }
</style>