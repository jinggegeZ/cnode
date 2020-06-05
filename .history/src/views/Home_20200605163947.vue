<template>
 <div>
  <div >
      <div class="box">
    <el-card class="box-card">
    <div slot="header" class="clearfix">
    <div class="head">
      <div><a href="">全部</a></div>
      <div><a href="">精华</a></div>
      <div><a href="">分享</a></div>
      <div><a href="">问答</a></div>
      <div><a href="">招聘</a></div>
      <div><a href=""></a></div>
    </div>
    <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
    </div>
    <div v-for="o in 4" :key="o" class="text item">
    {{'列表内容 ' + o }}
  </div>
      <!-- 分页器 -->
    <div class="block">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="10"
      layout="total, sizes, prev, pager, next, jumper"
      :total="40">
    </el-pagination>
  </div>
</el-card>
  </div>
  </div>
 </div>
</template>

<script>

 export default {
   data () {
     return {
       currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4
     }
   },
   components: {

   },
   methods: {
     handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
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
  
  .box {
    display: flex;
    margin-left: 100px;
    width: 1095px;
  }
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 1080px;
    margin-right: 10px;
  }
  .head {
    display: flex;
  }
</style>
