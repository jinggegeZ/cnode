<template>
 <div>
   <div> 我是body里面显示的数据: {{name}}</div>
 </div>
</template>

<script>
 export default {
   name: '',
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