<template>
 <div>
    <div class="top">我是头部组件</div>
     <div class="right"> 我是右边的组件</div>
     <div class="box">
     <router-view></router-view>
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
    .top {
        width: 100%;
        height: 50px;
        background: skyblue;
        text-align: center;
        line-height: 50px;
        position: relative;
    }
    .box {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .right {
        width: 200px;
        height: 600px;
        background: pink;
        position: absolute;
        top: 50px;
        right: 0;
    }
</style>