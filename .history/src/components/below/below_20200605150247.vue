<template>
 <div>
    <div class="foot"> 
        <div class="f-box">
          <div class="fb-font">
            <div><a href="">Rss</a></div>
            <div class="fb"></div>
            <div><a href="">源码地址</a></div>
          </div>
          <div class="fb-font">CNode 社区为国内最专业的 Node.js 开源技术社区，致力于 Node.js 的技术研究。</div>
          <div class="fb-font">
          服务器赞助商为
          <a href=""><img src="//static.cnodejs.org/FuIpEaM9bvsZKnQ3QfPtBHWQmLM9" alt=""></a>
          ，存储赞助商为<a href=""><img src="//static.cnodejs.org/Fg0jtDIcTqVC049oVu5-sn6Om4NX" alt=""></a>,由<a href=""><img src="//static.cnodejs.org/FpMZk31PDyxkC8yStmMQL4XroaGD" alt=""></a>
          </div>
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
      height: 50px;
      line-height: 50px;

    }
    .fb {
      width: 1px ;
      height: 15px;
      background: black;
      margin-left: 10px;
      margin-right: 10px;
      margin-top: 18px;
    }

</style>