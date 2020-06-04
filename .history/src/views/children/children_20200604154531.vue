<template>
 <div>
    <div class="right"> 我是右边的组件</div>
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
    
    .right {
        width: 200px;
        height: 600px;
        background: pink;
        position: absolute;
        top: 50px;
        right: 0;
    }
</style>