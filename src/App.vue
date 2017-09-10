<template>
 <div>
   
   <HeaderCine></HeaderCine>

    <router-view></router-view>

  <PiePage></PiePage>
 </div>
 
 
</template>

<script>
import HeaderCine from './components/HeaderCine.vue'
import PiePage from './components/PiePage.vue'
 export default {
   components:{HeaderCine,PiePage}

 }
</script>

<style>

</style>
