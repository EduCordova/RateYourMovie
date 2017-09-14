<template>
    <div class="center">
        
        <h1 class="title is-1">Categories</h1>


     <div class="container is-fullhd is-centered"> 

     <a class="button is-primary" @click="mensaje(28)">  
        <span class="icon">
          <i class="fa fa-film"></i>
        </span>
        <span>Accion</span>
     </a>
     <a class="button is-primary" @click="mensaje(12)">  
        <span class="icon">
          <i class="fa fa-film"></i>
        </span>
        <span>Aventura</span>
     </a>
     <a class="button is-primary" @click="mensaje(16)">  
        <span class="icon">
          <i class="fa fa-film"></i>
        </span>
        <span>Animación</span>
     </a>
     <a class="button is-primary" @click="mensaje(35)">  
        <span class="icon">
          <i class="fa fa-film"></i>
        </span>
        <span>Comedia</span>
     </a>
    <br><br>    
    <a class="button is-primary" @click="mensaje(80)">  
        <span class="icon">
          <i class="fa fa-film"></i>
        </span>
        <span>Crimen</span>
     </a>
    <a class="button is-primary" @click="mensaje(99)">  
        <span class="icon">
          <i class="fa fa-film"></i>
        </span>
        <span>Documental</span>
     </a>
    <a class="button is-primary" @click="mensaje(18)">  
        <span class="icon">
          <i class="fa fa-film"></i>
        </span>
        <span>Drama</span>
     </a>
     <a class="button is-primary" @click="mensaje(10751)">  
        <span class="icon">
          <i class="fa fa-film"></i>
        </span>
        <span>Familia</span>
     </a>
    <br><br>  
    <a class="button is-primary" @click="mensaje(14)">  
        <span class="icon">
          <i class="fa fa-film"></i>
        </span>
        <span>Fantasía</span>
     </a>
    <a class="button is-primary" @click="mensaje(36)">  
        <span class="icon">
          <i class="fa fa-film"></i>
        </span>
        <span>Historia</span>
     </a>
    <a class="button is-primary" @click="mensaje(27)">  
        <span class="icon">
          <i class="fa fa-film"></i>
        </span>
        <span>Terror</span>
     </a>
    <a class="button is-primary" @click="mensaje(10402)">  
        <span class="icon">
          <i class="fa fa-film"></i>
        </span>
        <span>Música</span>
     </a>
    <br><br>  
    <a class="button is-primary" @click="mensaje(9648)">  
        <span class="icon">
          <i class="fa fa-film"></i>
        </span>
        <span>Misterio</span>
     </a>
     <a class="button is-primary" @click="mensaje(10749)">  
        <span class="icon">
          <i class="fa fa-film"></i>
        </span>
        <span>Romance</span>
     </a>
     <a class="button is-primary" @click="mensaje(878)">  
        <span class="icon">
          <i class="fa fa-film"></i>
        </span>
        <span>Ciencia Ficción</span>
     </a>
     <a class="button is-primary" @click="mensaje(10770)">  
        <span class="icon">
          <i class="fa fa-film"></i>
        </span>
        <span>Película de TV</span>
     </a>    
     <br><br>  
     <a class="button is-primary" @click="mensaje(53)">  
        <span class="icon">
          <i class="fa fa-film"></i>
        </span>
        <span>Suspenso</span>
     </a>
     <a class="button is-primary" @click="mensaje(10752)">  
        <span class="icon">
          <i class="fa fa-film"></i>
        </span>
        <span>Guerra</span>
     </a>
     <a class="button is-primary" @click="mensaje(37)">  
        <span class="icon">
          <i class="fa fa-film"></i>
        </span>
        <span>Western</span>
     </a>
    </div>
  <p v-for="nom in data.genres" >
                {{nom.id}}
    </p><br> 
    </div>


</template>



<script>
import axios from 'axios'
export default {
    created(){
        window.document.title="Categories"
    },
  data() {
    return {
      data: [],
    }
  },

  methods: {
    mensaje(dato){
          console.log(dato)
          this.$router.push('/categories/'+dato)
        }
  },
  }

</script>

<style>
    .center{
        text-align: center;
    }

    .altura{
        height: 400px;
    }
</style>
