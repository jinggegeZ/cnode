<template>
 <div>
    <div class="right">
      <div class="r-head">
        <div class="rh-box">
          <div>CNODE:NODE-JS专业中文社区</div>
          <div>您可以登录或者注册</div>
          <div class="r-but"><button @click="login">登录</button></div>
        </div>
      </div>
      <div class="r-nav">
        <div class="rn-box">
            <div><img src="//static.cnodejs.org/FlajCCXkxZaOsuWp3k0iaiqfrJaS" alt="" width="270px"></div>
            <div><img src="//static.cnodejs.org/FgIok2ZlDer2QOb8sJ20S9Y8T2Jq" alt="" width="270px"></div>
            <div><img src="//static.cnodejs.org/Fn4D6BhOTz1IswvmzeZ1q7QW1ls_" alt="" width="270px"></div>
        </div>
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
        width: 290px;
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
    .r-but {
        display: flex;
        
        align-items: center;
    }
    .r-nav {
        background: white;
    }
    .rn-box {
        width: 90%;
        margin: 5%;
    }
</style>