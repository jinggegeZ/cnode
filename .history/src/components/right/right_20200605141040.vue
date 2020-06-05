<template>
 <div>
    <div class="right">
      <div class="r-head">
        <div class="rh-box">
          <div>CNODE:NODE-JS专业中文社区</div>
          <div>您可以登录或者注册</div>
          <div><button @click="login">登录</button></div>
        </div>
      </div>
      <div class="r-nav">
      <img src="" alt="">
      </div>
    </div>
 </div>
</template>

<script>
 export default {
   data () {
     return {

     }
   },
   components: {

   },
   methods: {
      login(){
        this.$router.push('../../views/login/login.vue')
      }
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
    .right {
        width: 200px;
        position: absolute;
        right: 100px;
        top: 50px;
    }
    .rh-box {
        width: 90%;
        margin: 5%;
    }
    .r-head {
        background: white;
    }
</style>