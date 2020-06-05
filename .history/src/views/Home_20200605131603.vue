<template>
 <div>
  <div class="box">
    <div>123</div>
    <div>456</div>
    <div>789</div>
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
</style>
