<template>
  <section>
    <div class="container is-fullhd fondo" >
    <center>
      <br><br><br><br><br><br><br>
      <h4 class="subtitle is-4 blanco">Welcome!</h4>
      <h1 class="title is-1 blanco">SEARCH AND RATE</h1>  
       <h1 class="subtitle is-1 blanco">A MOVIE EASILY!</h1>
     </center>
     <br>

    
     
    
      <div class="column ">

        <b-autocomplete  v-model="name" :data="data" placeholder="Search a movie title..." icon="search" field="title" :loading="isFetching" @input="getAsyncData" @select="option => selected = option">
          <template scope="props" >
            <div class="media" @click="mensaje(props.option.id)">
              <div class="media-left"  >
                <img width="32" :src="`https://image.tmdb.org/t/p/w500/${props.option.poster_path}`">
              </div>
              <div class="media-content">
                {{ props.option.title }}
                <br>
                <small>
                 Released at {{ props.option.release_date }},
                   rated <b>{{ props.option.vote_average }}</b>
                 </small>
              </div>
            </div>
          </template>
        </b-autocomplete>
      </div>        
    </div>   

     <nav class="container is-mobile">     
     <h4 class="subtitle is-4"><center>Proudly done with PHP! (?)</center></h4>
      <br><div class="level-item has-text-centered">
        <img src="http://lhmr.tech/content/images/2016/10/darth.png" alt="Rate your movie!"  width="150" height="160">
      </div>
    </nav>
    
</section>




   
 


</template>


<script>
  //importamos axios
  import axios from 'axios'
  import debounce from 'lodash/debounce'

  export default {

    data() {
        return {
          data: [],
          name: '',
          selected: null,
          isFetching: false
        }
      },
      methods: {
        // You have to install and import debounce to use it,
        // it's not mandatory though.
        getAsyncData: debounce(function() {
          this.data = []
          this.isFetching = true
          axios.get(`https://api.themoviedb.org/3/search/movie?api_key=bb6f51bef07465653c3e553d6ab161a8&query=${this.name}`)
            .then(({
              data
            }) => {
              data.results.forEach((item) => this.data.push(item))
              this.isFetching = false
            }, response => {
              this.isFetching = false
            })
        }, 500),

        mensaje(dato){
          console.log(dato)
          this.$router.push('/movies/'+dato)
        }
      }
  }

</script>


<style>
.fondo{
color:#fff;
background-image:url(https://luishmr0.github.io/semanticmovies/img/bg.jpg);
background-repeat:no-repeat;
background-attachment:scroll;
background-position:center center;
-webkit-background-size:cover;
-moz-background-size:cover;
-o-background-size:cover;
background-size:cover;
width:100%;
height:100%;
}
.blanco{
color:#fff;
font-family:'Kaushan Script','Helvetica Neue',Helvetica,Arial,cursive;
}
</style>
