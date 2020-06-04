<template>
 <div>
    <div class="container">
        <div class="top">
            <top>我是头部组件</top>
        </div>
        <div class="nav">
            <div class="right">
            <right>我是右边的组件</right>
            </div>
            <div class="box">
            <router-view></router-view>
            </div>
        </div>
    </div>
 </div>
</template>

<script>
    import top from '../components/top/top'
    import right from '../components/right/right'

 export default {
     name:'layout',
    data () {
     return {

     }
   },
   components: {
       top,
       right,
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