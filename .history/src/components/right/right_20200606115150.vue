<template>
  <div>
    <div class="right">
      <div class="r-head" >
        <div class="rh-box">
          <a href="https://cnodejs.org/" class="r-font">CNODE:NODE-JS专业中文社区</a>
          <a href="/login" class="r-font">您可以登录或者注册</a>
          <div class="r-but r-font">
            <button @click="login">登录</button>
          </div>
        </div>
        <div class="rh-box" >
          <a class="r-font">这个人很几把懒什么都没有留下</a>

          <a class="r-font">您可以 留言 或者 退出 </a>
          <div class="r-but r-font">
            <button @click="login">登录</button>
            <button @click="out">退出</button>
          </div>
        </div>
      </div>
      <div class="r-nav">
        <div class="rn-box">
          <a href class="rn-img">
            <img src="//static.cnodejs.org/FlajCCXkxZaOsuWp3k0iaiqfrJaS" alt width="270px" />
          </a>
          <a href class="rn-img">
            <img src="//static.cnodejs.org/FgIok2ZlDer2QOb8sJ20S9Y8T2Jq" alt width="270px" />
          </a>
          <a href class="rn-img">
            <img src="//static.cnodejs.org/Fn4D6BhOTz1IswvmzeZ1q7QW1ls_" alt width="270px" />
          </a>
        </div>
      </div>
      <div class="r-haed">
        <div class="r-head">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>无人回复的话题</span>
            </div>
            <div v-for="o in 6" :key="o" class="text item">{{'使用 Nodejs 开发的 SpaceX-API 开源了！ ' }}</div>
          </el-card>
        </div>
      </div>
      <div class="r-haed">
        <div class="r-head">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>积分榜 Top 100>></span>
            </div>
            <div v-for="o in 4" :key="o" class="text item">{{'22250 i5ting ' }}</div>
          </el-card>
        </div>
      </div>
      <div class="r-haed">
        <div class="r-head">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>友情社区</span>
            </div>
            <div class="text item"><a href="https://ruby-china.org/" target="blank"><img src="//static2.cnodejs.org/public/images/ruby-china-20150529.png" alt="" width="150px"></a></div>
            <div class="text item"><a href="http://phphub.org/"  target="blank"><img src="//static2.cnodejs.org/public/images/phphub-logo.png" alt="" width="150px"></a></div>
          </el-card>
        </div>
      </div>
      <div class="r-haed">
        <div class="r-head">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>客户端二维码</span>
            </div>
            <div class="a-box">
              <div><img src="//static.cnodejs.org/FtG0YVgQ6iginiLpf9W4_ShjiLfU" alt="" width="200px" height="200px"></div>
              <div class="a-font"><a href="https://github.com/soliury/noder-react-native" target="blank">客户端源码地址</a></div>
            </div>
          </el-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {},
  methods: {
    login() {
      this.$router.push("/login");
    },
    out() {
      this.$router.replace('/')
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
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
  background: rgb(246, 246, 246);
  line-height: 50px;
}
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 14px;
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}
.box-card {
  width: 300px;
}
.a-font {
 font-size: 14px;
}
.a-box {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.a-font:hover {
  text-decoration: underline;
}
</style>