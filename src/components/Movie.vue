<template>
  <div class="container is-mobile">
    <div class="column">
      <center>
        <h1 class="title is-1">{{data.title}}</h1>

        
      </center>
    </div>
    <center>
      <img :src="uri" alt=" Rate your movie!" height="350" width="300">
      <p>
<b>Average Rating : {{data.vote_average}}/10</b>
      </p>
      
    </center>
    <h1 class="title is-4"  >Título original: {{data.original_title}} </h1>
    <h1 class="title is-4"  >Fecha de estreno: {{data.release_date}} </h1>
    <h1 class="title is-4"  >Duración: {{data.runtime}} minutos</h1>
    <h1 class="title is-4"  >Género: {{data.genres[0].name}} </h1>
    <h1 class="title is-4">Descripcion : </h1>
    <p>
      {{data.overview}}
    </p>
    <br>
    <h1 class="title is-5">Presupuesto: {{data.budget}} </h1>
    <h1 class="title is-5">Recaudación: {{data.revenue}} </h1>
    <br><br><br>
    <article class="media">
      <figure class="media-left">
        <p class="image is-64x64">
          <img src="http://bulma.io/images/placeholders/128x128.png">
        </p>
      </figure>

      <div class="media-content">
        <div class="field">
          <p class="control">
            <textarea class="textarea" placeholder="Add a comment..."></textarea>
          </p>
        </div>
        <div class="field">
          <p class="control">
            <button class="button is-dark">Post comment</button>
          </p>
        </div>
      </div>
    </article>

  </div>
</template>


<script>
import axios from 'axios'
export default {
  created(){
    window.document.title = "Movie"
  },
  mounted() {
    this.geturl();
   // this.date(this.data.release_date)
  
  },
  data() {
    return {
      id: this.$route.params.id,
      titulo: "titulo",
      data: [],

    }
  },

  methods: {
    geturl() {

      axios.get(`https://api.themoviedb.org/3/movie/${this.id}?language=es-ES&api_key=bb6f51bef07465653c3e553d6ab161a8`)
        .then((info) => {
          this.data = info.data;
          console.log(this.data)
        });
    },
    // date(fecha) {

    //   return fecha.split('-').reverse().join('/');
    // }
  },
  computed: {
    uri() {
      var url = `https://image.tmdb.org/t/p/w500/${this.data.poster_path}`
      return url
    },


  }
}
</script>

<style>

</style>
