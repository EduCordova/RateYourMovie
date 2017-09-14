<template>
    <div class="center">
        
        <h1 class="title is-1">Categories</h1>


     <div class="container is-fullhd is-centered">   
<center><figure class="image is-128x128">
  <img src="https://pbs.twimg.com/profile_images/700224622025842689/0cL11h9O_reasonably_small.jpg">
  Accion
</figure></center><br>



    <span class="tag is-primary is-medium">{{data.genres[0].name}}</span>
    <span class="tag is-primary is-medium">{{data.genres[1].name}}</span>
    <span class="tag is-primary is-medium">{{data.genres[2].name}}</span>
    <span class="tag is-primary is-medium">{{data.genres[3].name}}</span>
    <br><br>    
    <span class="tag is-primary is-medium">{{data.genres[4].name}}</span>
    <span class="tag is-primary is-medium">{{data.genres[5].name}}</span>
    <span class="tag is-primary is-medium">{{data.genres[6].name}}</span>
    <span class="tag is-primary is-medium">{{data.genres[7].name}}</span>
    <br><br>  
    <span class="tag is-primary is-medium">{{data.genres[8].name}}</span>
    <span class="tag is-primary is-medium">{{data.genres[9].name}}</span>
    <span class="tag is-primary is-medium">{{data.genres[10].name}}</span>
    <span class="tag is-primary is-medium">{{data.genres[11].name}}</span>
    <br><br>  
    <span class="tag is-primary is-medium">{{data.genres[12].name}}</span>
    <span class="tag is-primary is-medium">{{data.genres[13].name}}</span>
    <span class="tag is-primary is-medium">{{data.genres[14].name}}</span>
    <span class="tag is-primary is-medium">{{data.genres[15].name}}</span>
     <br><br>  
    <span class="tag is-primary is-medium">{{data.genres[16].name}}</span>
    <span class="tag is-primary is-medium">{{data.genres[17].name}}</span>
    <span class="tag is-primary is-medium">{{data.genres[18].name}}</span>
    </div>


    </div>


</template>



<script>
import axios from 'axios'
export default {
  mounted() {
    this.geturl();
  
  },
  data() {
    return {
      data: [],
    }
  },

  methods: {
    geturl() {
      axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=bb6f51bef07465653c3e553d6ab161a8&language=es-ES`)
        .then((info) => {
          this.data = info.data;
          console.log(this.data)
        });
    },
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
