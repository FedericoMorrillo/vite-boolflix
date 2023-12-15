<script>
import { store } from '../../src/store';
import axios from 'axios';
import Cards from './cards.vue';
export default {
    data() {
        return {
            store,
            keysearch: "",
            movies: [],
            series: [],
        };
    },
    methods: {

        //funzione che svolge la ricerca all' evento click sul submit
        search() {
            const movieQuery = `${store.config.baseApiUrl}${store.config.movie}${store.config.apiKey}${store.config.query}${this.keysearch}`; //ricerca tra i films
            const seriesQuery = `${store.config.baseApiUrl}${store.config.tv}${store.config.apiKey}${store.config.query}${this.keysearch}`; //ricerca tra le series

            axios.get(movieQuery)
                .then(response => {
                    // Gestiamo la risposta della chiamata API per i films
                    this.movies = response.data.results;
                });
            axios.get(seriesQuery)
                .then(response => {
                    // Gestiamo la risposta della chiamata API per le serie
                    this.series = response.data.results;
                    this.keysearch = "";  //ripristina la barra di ricerca
                });
        }
    },
    components: { Cards }
};

</script>

<template>
    <!--sezione di ricerca-->
    <nav>
        <form @submit.prevent="search"><!--scatena l' evento all' invio del form-->
            <!--chiave di riferimento testo input-->
            <input type="text" v-model="keysearch" placeholder="Cerca"><button type="submit">Cerca</button>
        </form>
    </nav>
    <!--/sezione di ricerca-->


    <Cards :movies="movies" :series="series" />
</template>