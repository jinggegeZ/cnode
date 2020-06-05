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
        <div class="below">
            <foot></foot>
        </div>
    </div>
 </div>
</template>

<script>
    import top from '../../components/top/top'
    import right from '../../components/right/right'
    import foot from '../../components/foot/foot'
 export default {
     name:'layout',
   data () {
     return {

     }
   },
   components: {
       top,
       right,
       foot,
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