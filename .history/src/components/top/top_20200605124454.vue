<template>
  <div>
    <div class="top">
      <div class="box">
        <div class="b-left">
          <div class="img">
            <img
              src="//static2.cnodejs.org/public/images/cnodejs_light.svg"
              alt
              width="128px"
              height="30px"
            />
          </div>
          <div class="ipt">
            <i class="el-icon-search"></i>
            <input type="text" class="item">
          </div>
        </div>
        <div class="b-right">
            <div class="b-box">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
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
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped >
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
.
.b-box {
    display: flex;
    justify-content: space-around;
}
</style>