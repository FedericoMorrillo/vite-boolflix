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
    <header>

        <!--contenitore-->
        <div class="container flex justify-btw">

            <!--logo-->
            <h1 class="logo">BOOLFLIX</h1>
            <!--/logo-->

            <!--ricerca-->
            <nav>
                <form @submit.prevent="search"><!--scatena l' evento all' invio del form-->
                    <!--chiave di riferimento testo input-->
                    <input type="text" v-model="keysearch" placeholder="Cerca"><button type="submit">Cerca</button>
                </form>
            </nav>
            <!--/ricerca-->

        </div>
        <!--contenitore-->

    </header>
    <!--/sezione di ricerca-->


    <Cards :movies="movies" :series="series" />
</template>

<style scoped lang="scss">
@import "../scss/utils.scss";

header {
    background-color: rgb(26, 24, 24);
    border-bottom: 5px solid rgb(54, 52, 52);
}

.contenitore {
    max-width: 75rem;
    margin: 0 auto;
}

.logo {
    font-size: 1.875rem;
    color: red;
    padding: .9375rem .9375rem;
}

nav {
    padding: .9375rem .9375rem;

    input {
        background-color: rgb(58, 56, 56);
        color: white;
        height: 1.5625rem;
        border-color: rgb(0, 0, 0);
        border: none;
    }

    button {
        background-color: rgb(54, 52, 52);
        color: white;
        height: 1.5625rem;
        border: none;
        cursor: pointer;

        &:hover {
            border: 2px solid grey;
        }
    }

}
</style>