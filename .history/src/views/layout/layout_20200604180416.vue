<template>
 <div>
    <div class="container">
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
 </div>
</template>

<script>
    import top from '../'
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
    .container {
        width: 100%;
    }
</style>