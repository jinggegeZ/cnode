<template>
 <div>
    <div class="foot"> 
        <div class="f-box">
          <div class="fb-font">
            <div><a href="">Rss</a></div>
            <div class="fb"></div>
            <div><a href="">源码地址</a></div>
          </div>
          <div class="fb-font"></div>
          <div class="fb-font"></div>
          <div class="fb-font"></div>
        </div>
    </div>
 </div>
</template>

<script>
 export default {
   name: '',
   props: {
   },
   components: {

   },
   data () {
     return {

     }
   },
   methods: {

   },
   mounted() {

   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped>
    a {
      text-decoration: none;
      color: black;
    }
    .foot {
        width: 100%;
        display: flex;
        justify-content: center;
        background: white;
    }
    .f-box {
        width: 1400px;
        height: 100px;
        align-items: center;
        
    }
    .fb-font {
      display: flex;

    }
    .fb {
      width: 1px ;
      height: 20px;
      background: rgb(225,225,225);
      margin-left: 10px;
      margin-right: 10px;
    }

</style>