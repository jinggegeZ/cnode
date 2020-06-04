<template>
 <div>
    <div class="top">我是头部组件</div>
    <div>
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
    
</style>