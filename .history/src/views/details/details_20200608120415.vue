<template>
 <div>
    <div>sdsad</div>
 </div>
</template>

<script>
import axios from 'axios';
 export default {
   name: 'details',
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
       axios.get(`https://cnodejs.org/api/v1/topic/${this.id}`).then(res => {
         console.log(res.data.data);
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