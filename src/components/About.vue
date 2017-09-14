<template>
  <div class="container is-mobile">
<div class="column">
  <center>  <h1 class="title is-1"  >About us</h1></center>
</div>
 <center><img src="http://lhmr.tech/content/images/2016/10/darth.png" alt=" Rate your movie!" height="350" width="300"> </center>        
       <p>
          Our company is based on the greatest mind ever, Nachito!
        </p>
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
export default {
  created(){
    window.document.title = "About"
  }
}
</script>

<style>

</style>
