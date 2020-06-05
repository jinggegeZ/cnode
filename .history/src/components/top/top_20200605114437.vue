<template>
  <div>
    <div class="top">
      <div class="box">
        <div class="b-left">
          <div>
            <img
              src="//static2.cnodejs.org/public/images/cnodejs_light.svg"
              alt
              width="128px"
              height="30px"
            />
          </div>
          <div class="ipt">
            <el-input placeholder="请输入内容" prefix-icon="el-icon-search" v-model="input2"></el-input>
          </div>
        </div>
        <div></div>
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
  width: 233px;
  height: 28px;
  border-radius: 50px !important;
  overflow: hidden;
  line-height: 28px;
}
</style>