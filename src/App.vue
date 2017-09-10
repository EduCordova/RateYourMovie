<template>
 <div>
   
   <HeaderCine></HeaderCine>

    <router-view></router-view>

  <PiePage></PiePage>
 </div>
 
 
</template>

<script>
import HeaderCine from './components/HeaderCine.vue'
import PiePage from './components/FooterCine.vue'
 export default {
   components:{HeaderCine,PiePage}

 }
</script>

<style>

</style>
