<template>
 <div>
    <!-- <template>
    <el-backtop target=".page-component__scroll .el-scrollbar__wrap"></el-backtop>
    </template> -->
  <div >
      <div class="box">
    <el-card class="box-card">
    <div slot="header" class="clearfix">
    <div class="head">
      <div @click="click"><a href="">全部</a></div>
      <div @click="click"><a href="">精华</a></div>
      <div @click="click"><a href="">分享</a></div>
      <div @click="click"><a href="">问答</a></div>
      <div @click="click"><a href="">招聘</a></div>
      <div @click="click"><a href="">客户端测试</a></div>
    </div>
    <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
    </div>
    <div v-for="(item,index) in arr" :key="index" class="text item">
    <a href="" class="img"><img :src="item.author.avatar_url" alt="" width="20px" height="20px"></a>{{item.reply_count}}/{{}} {{item.title}}
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
import axios from 'axios'
 export default {
   data () {
     return {
       currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4,
        arr:[]
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
      },
      click() {
        
      },
      gteData(){
            axios.get(`https://cnodejs.org/api/v1/topics`)
           .then((res)=>{
            this.arr = res.data.data
            console.log(this.arr);
           })
           .catch((err)=>{
             console.log(err)
           })
         }
   },
   mounted() {
     this.gteData()
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
    color: green;
  }
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
    width: 400px;
    display: flex;
    justify-content: space-around;
  }
  .f-font {
    background: green;
    color: white;
  }
  
</style>
