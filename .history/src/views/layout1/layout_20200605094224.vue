<template>
 <div>
    <div class="container">
        
            <div class="t-head">
            <top></top>
            </div>
        
        <div class="content">
            <div>
                <router-view></router-view>
            </div>
            <div class="right">
                <right></right>
            </div>
            <div>
                <Body>
                    <div> 我是body里面显示的数据: {{name}}</div>
                </Body>
            </div>
        </div>
    </div>
 </div>
</template>

<script>
    import top from '../../components/top/top'
    import right from '../../components/right/right'
    import body from '../../components/body/Body'
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
   
   
</style>