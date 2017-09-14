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
    <h1 class="title is-4">Director(es) : </h1>
    <p v-for="nom in data2.crew"  v-if="nom.job === 'Director'">
                {{nom.name}}
    </p><br>     
    <h1 class="title is-4">Escritor(es) : </h1>
    <p v-for="nom in data2.crew"  v-if="nom.job === 'Writer'">
                {{nom.name}}
       </p><br>    
    <h1 class="title is-4">Reparto : </h1>  <b-panel header="Abrir/Cerrar"
            has-custom-template
            collapsible
            :open.sync="isOpen">
            <div class="panel-block">
             <div class="content">
                  <p v-for="nom in data2.cast">
                {{nom.name}}
                </p>
             </div>               
            </div>                
        </b-panel> 
    <h1 class="title is-4"  >Fecha de estreno: {{data.release_date}} </h1>
    <h1 class="title is-4"  >Duración: {{data.runtime}} minutos</h1>
    <h1 class="title is-4"  >Género(s): </h1>
    <p v-for="nom in data.genres">
      {{nom.name}}
    </p>
    <br>
    <h1 class="title is-4">Descripcion : </h1>
    <p>
      {{data.overview}}
    </p><br>       
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
  mounted() {
    this.geturl();  
    this.geturlcast();  
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
      axios.get(`https://api.themoviedb.org/3/movie/${this.id}?language=es-ES&api_key=bb6f51bef07465653c3e553d6ab161a8`)
        .then((info) => {
          this.data = info.data;
          console.log(this.data)
        });
    }, 

  geturlcast() {
      axios.get(`https://api.themoviedb.org/3/movie/${this.id}/casts?api_key=bb6f51bef07465653c3e553d6ab161a8`)
        .then((info) => {
          this.data2 = info.data;
          console.log(this.data2)
        });
    } 
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
