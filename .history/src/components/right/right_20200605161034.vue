<template>
 <div>
    <div class="right">
      <div class="r-head">
        <div class="rh-box">
          <a href="" class="r-font">CNODE:NODE-JS专业中文社区</a>
          <a href="" class="r-font">您可以登录或者注册</a>
          <div class="r-but r-font"><button @click="login">登录</button></div>
        </div>
      </div>
      <div class="r-nav">
        <div class="rn-box">
            <a href="" class="rn-img"><img src="//static.cnodejs.org/FlajCCXkxZaOsuWp3k0iaiqfrJaS" alt="" width="270px"></a>
            <a href="" class="rn-img"><img src="//static.cnodejs.org/FgIok2ZlDer2QOb8sJ20S9Y8T2Jq" alt="" width="270px"></a>
            <a href="" class="rn-img"><img src="//static.cnodejs.org/Fn4D6BhOTz1IswvmzeZ1q7QW1ls_" alt="" width="270px"></a>
        </div>
      </div>
      <div class="r-haed">
        <div class="r-head">
          <div class="d-box">无人回复的话题</div>
          <div><a href="" class="r-font">CabloyJS V3.2.0支持Socket IO</a></div>
          <div><a href="" class="r-font">从零到部署：用 Vue 和 Express 实现迷你全栈电商应用（四）</a></div>
          <div><a href="" class="r-font">Linux 主机在线文件管理工具</a></div>
          <div><a href="" class="r-font">nodejs 的反序列化存在漏洞么</a></div>
          <div><a href="" class="r-font">异步组件报错问题</a></div>
        </div>
      </div>
      <div class="r-haed">
        <div class="r-head">
          <div class="d-box">积分榜 top 100>></div>
          <div><a href="" class="r-font">CabloyJS V3.2.0支持Socket IO</a></div>
          <div><a href="" class="r-font">从零到部署：用 Vue 和 Express 实现迷你全栈电商应用（四）</a></div>
          <div><a href="" class="r-font">Linux 主机在线文件管理工具</a></div>
          <div><a href="" class="r-font">nodejs 的反序列化存在漏洞么</a></div>
          <div><a href="" class="r-font">异步组件报错问题</a></div>
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
      a {
        text-decoration: none;
        color: black;
      }
    .right {
        width: 290px;
        margin-bottom: 10px;
    }
    .rh-box {
        width: 90%;
        margin: 5%;
    }
    .r-font {
        height: 50px;
        line-height: 50px;
    }
    .r-head {
        background: white;
        margin-bottom: 10px;
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
    .rn-img {
      width: 290px;
      height: 80px;
      display: flex;
      align-items: center;
    }
    .d-box {
      height: 50px;
      background: rgb(246,246,246);
      line-height: 50px;
      margin-left: 10px;
    }
</style>