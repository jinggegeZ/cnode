<template>
 <div>
    <div class="container">
        <div class="top">
            <div class="t-head">
            <top></top>
            </div>
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
    import top from '../../components/top/top'
    import right from '../../components/right/right'
    
 export default {
     name:'layout',
   data () {
     return {

     }
   },
   components: {
       top,
       right,
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
    .top {
        width: 100%;
        display: flex;
        justify-content: center;
    }
    .t-head {
        max-width: 1400px;
    }
</style>