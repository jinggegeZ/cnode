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
      <div >
          <div v-if="item.tab === 'job'">全部</div>
          <div v-if="item.tab === 'good'">精品</div>
          <div v-if="item.tab === 'share'">分享</div>
          <div v-if="item.tab === 'ask'">问答</div>
      </div>
      <div @click="click"><a href="">招聘</a></div>
      <div @click="click"><a href="">客户端测试</a></div>
    </div>
    </div>
    <div v-for="(item,index) in arr" :key="index" class="text item style">
      <div class="item2">
          <div class="item1"><a href="" class="img"><img :src="item.author.avatar_url" alt="" width="25px" height="25px"></a></div>
          <div class="item3">{{item.reply_count}}/{{item.visit_count}}</div>
          <div class="i-top" v-if="index < 2">置顶</div>
          <div class="i-top1" v-if="index > 2 && item.tab === 'share'">分享</div>
          <div class="i-top1" v-if="item.tab === 'ask'">问答</div>
          <a href="/details" class="item4">{{item.title}}</a>
      </div>
      <div>
        <div>1212</div>
        <div>{{item.last_reply_at}}天前</div>
      </div>
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
import dayjs from 'dayjs'
 export default {
   data () {
     return {
       currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4,
        arr:[],
        arr1:[]
        
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
            console.log(res.data);
           })
           .catch((err)=>{
             console.log(err)
           })
         },
      all(){
           this.$router.replace('/')
      },
      

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
  .style {
    display: flex;
    justify-content: space-between;
    margin-left: 10px;
    border-bottom: 1px solid rgb(225,225,225);
  }
  .item2 {
    display: flex;
    height: 50px;
    align-items: center;
  }
  .style:hover {
    background: rgb(225,225,225);
  }
  .style:hover a{
    text-decoration: underline;
  }
  .item1 {
    margin-left: 10px;
    color:#9e78c0;
    width: 50px;
  }
  .item3 {
    margin-left: 10px;
    color:#9e78c0;
    width: 70px;
  }
  .item4 {
    margin-left: 10px;
    color:black;
    width: 700px;
    font-size: 16px;
  }
  .box {
    display: flex;
    margin-left: 100px;
    width: 1095px;

  }
  .text {
    font-size: 14px;
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
  .i-top {
    width: 40px;
    background: green;
    height: 30px;
    color: white;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 10px;
  }
  .i-top1 {
    width: 40px;
    background: rgb(229,229,229);
    height: 30px;
    color: rgb(162,162,183);
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 10px;
  }
</style>
