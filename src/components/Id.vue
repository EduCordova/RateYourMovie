<template>
  <div class="container is-mobile">
    <div class="column">
      <center>
        <h1 class="title is-1">Categoria</h1>

        
      </center>
    </div>
    <center>      
      
    </center>
    <h1 class="title is-4"  >Peliculas </h1>
    <p v-for="nom in data.results">
    <a @click="mensaje(nom.id)">{{nom.title}} </a>                
    </p><br>     </h1>
   
      </div>
  

  </div>
</template>


<script>
import axios from 'axios'
export default {
  mounted() {
    this.geturl();  
    window.document.title = this.id + " - RYM!"
  },
  data() {
    return {
      id: this.$route.params.id,
      data: [],
      data2: [],
      isOpen: false
    }
  },

  methods: {
    geturl() {
      axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=bb6f51bef07465653c3e553d6ab161a8&language=es-ES&sort_by=popularity.desc&include_adult=false&page=1&with_genres=${this.id}`)
        .then((info) => {
          this.data = info.data;
          console.log(this.data)
        });
    },
     mensaje(dato){
          console.log(dato)
          this.$router.push('/movies/'+dato)
        }
  }
  }
</script>

<style>

</style>
