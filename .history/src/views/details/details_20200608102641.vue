<template>
 <div>
    <div>sdsad</div>
 </div>
</template>

<script>
import axios from 'axios';
 export default {
   name: '',
   props: {
   },
   components: {

   },
   data () {
     return {
       id:''
     }
   },
   methods: {
     getData(){
       
     }
   },
   mounted() {
     this.id = this.$route.query.id
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>

</style>