<script>
import { store } from '../../src/store';
import axios from 'axios';
export default {
    data() {
        return {
            store,
            keysearch: "",
        }
    },
    methods: {

        //funzione che svolge la ricerca all' evento click sul submit
        search() {
            const movieQuery = `${store.movieApiUrl}${this.keysearch}`; //ricerca tra i films
            const seriesQuery = `${store.seriesApiUrl}${this.keysearch}`; //ricerca tra le series

            axios.get(movieQuery)
                .then(response => {
                    // Gestiamo la risposta della chiamata API per i films
                    this.movies = response.data.results;
                    console.log(response.data.results)  //****DEBUG**** */
                });
            axios.get(seriesQuery)
                .then(response => {
                    // Gestiamo la risposta della chiamata API per le serie
                    this.series = response.data.results;
                    console.log(response.data.results)  //****DEBUG**** */
                });
        }
    }

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
</template>