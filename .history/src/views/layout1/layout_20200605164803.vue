<template>
 <div>
    <div class="container">
    <template>
    
    <el-backtop target=".page-component__scroll .el-scrollbar__wrap"></el-backtop>
    </template>
            <div class="top">
            <top></top>
            </div>
        <div class="content">
            <div>
                <router-view></router-view>
            </div>
            <div class="right">
                <right></right>
            </div>
        </div>
    </div>
    <div class="below">
        <below></below>
    </div>
 </div>
</template>

<script>
    import top from '../../components/top/top'
    import right from '../../components/right/right'
    import below from '../../components/below/below'
 export default {
     name:'layout',
   data () {
     return {

     }
   },
   components: {
       top,
       right,
       below,
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
    .container {
        width: 100%;
    height: 100%;
    background: rgb(225,225,225);
    }
    .content {
        display: flex;
    }
   
   
</style>