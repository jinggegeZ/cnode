<template>
  <div>
    <div class="top">
      <div class="box">
        <div class="b-left">
          <div class="img" @click="home">
            <img src="//static2.cnodejs.org/public/images/cnodejs_light.svg" alt="" width="128px" height="30px">
          </div>
          <div class="ipt">
            <i class="el-icon-search icon"></i>
            <input type="text" class="item">
          </div>
        </div>
        <div class="b-right">
            <div class="b-box">
                <a href="/">首页</a>
                <a href="">新手入门</a>
                <a href="">API</a>
                <a href="">关于</a>
                <a href="">注册</a>
                <a href="" @click="login">登录</a>
            </div>
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
      login(){
          this.$router.push('../../views/login/login.vue')
      },
      home(){
          this.$router.push('/')
      }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped >
a {
    text-decoration: none;
    color: #777;
}
a:hover {
    color: white;
}
.top {
  width: 100%;
  height: 50px;
  background: rgb(68, 68, 68);
}
.box {
  max-width: 1400px;
  height: 50px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.b-left {
  display: flex;

}
.ipt {
  width: 240px;
  height: 28px;
  border-radius: 50px !important;
  overflow: hidden;
  display: flex;
  align-items: center;
  background: #888;
  margin-left: 10px;
  
}
.item {
    border: none;
    outline:none;
    background: transparent;
    margin-left: 5px;
    width: 200px;
    height: 24px;
    margin-left: 10px;
}
.ipt:hover {
    background: white;
}
.img {
    display: flex;
    align-items: center;
}
.b-right {
    width: 300px;
}
.b-box {
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.icon {
    margin-left: 5px;
}
</style>