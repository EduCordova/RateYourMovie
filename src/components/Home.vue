<template>

    <section >
        
        <div class=" container is-mobile">

            <div class="column">
                <p class="content"><b>Data:</b> {{ selected }}</p>
            <b-autocomplete
                v-model="name"
                :data="data"
                placeholder="Buscar"
                icon="search"
                field="title"
                :loading="isFetching"
                @input="getAsyncData"
                @select="option => selected = option">

                <template scope="props">
                    <div class="media">
                        <div class="media-left">
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
            getAsyncData: debounce(function () {
                this.data = []
                this.isFetching = true
               axios.get(`https://api.themoviedb.org/3/search/movie?api_key=bb6f51bef07465653c3e553d6ab161a8&query=${this.name}`)
                    .then(({ data }) => {
                        data.results.forEach((item) => this.data.push(item))
                        this.isFetching = false
                    }, response => {
                        this.isFetching = false
                    })
            }, 500)
        }
    }
</script>