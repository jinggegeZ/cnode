<template>
 <div>
   <div>我是body里面的数据： {{name}}</div>
 </div>
</template>

<script>
 export default {
   
   props: {
   },
   components: {

   },
   data () {
     return {

     }
   },
   methods: {

   },
   mounted() {

   },
   watch: {

   },
   computed: {
       name() {
       return this.$store.state.name
     }
   }
 }
</script>

<style scoped lang='scss'>

</style>