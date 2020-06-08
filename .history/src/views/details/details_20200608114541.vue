<template>
 <div>
    <div>sdsad</div>
 </div>
</template>

<script>
import axios from 'axios';
 export default {
   name: 'Details',
   props: {
   },
   components: {

   },
   data () {
     return {
       id:'',
       article: {}
     }
   },
   methods: {
     getData(){
       axios.get('').then(res => {
         this.article = res.data.data
       }).catch(err => {
         console.log(err);
       })
     }
   },
   mounted() {
     this.id = this.$route.query.id
     this.getData()
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>

</style>