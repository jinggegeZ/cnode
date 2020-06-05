<template>
 <div>
  <div class="box">
    <el-card class="box-card">
    <div slot="header" class="clearfix">
    <span>卡片名称</span>
    <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
    </div>
    <div v-for="o in 4" :key="o" class="text item">
    {{'列表内容 ' + o }}
  </div>
</el-card>
    <!-- 分页器 -->
    <!-- <div class="block">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="10"
      layout="total, sizes, prev, pager, next, jumper"
      :total="40">
    </el-pagination>
  </div> -->
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
    width: 100%;
  }
</style>
