<template>
 <div>
   
   <HeaderCine></HeaderCine>
<div  class="bod">
    <router-view></router-view>
</div>
<div  class="foot">
  <PiePage ></PiePage>
</div>
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
