<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
export default {
    // i due array ottenuti
    props: ['movies', 'series'],
    components: {
        FontAwesomeIcon,
    },
    data() {
        return {
            //bandiere lingua
            en: "src/assets/en.png",
            it: "src/assets/it.jpg",

            //immagine di coperrtina
            imgConfig: {
                baseImgUrl: "https://image.tmdb.org/t/p/",
                sizePoster: "w342",
            }
        }
    },
    methods: {
        starVote(vote, index) {
            // Calcola quante stelle piene sono necessarie in base al voto calcolato per intero e arrotondato per eccesso
            const filledStars = Math.ceil(vote / 2);

            // Restituisce l'icona da utilizzare per la stella corrente
            //                           true? -> condizione1   false? -> condizione2
            return index + 1 <= filledStars ? ['fas', 'star'] : ['far', 'star'];
        },
    },
}
</script>

<template>
    <!--card-->
    <div class="card">

        <!--titolo-->
        <h2 class="title" v-if="movies.length > 0">FILMS</h2>
        <!--/titolo-->

        <ul class="flex wrap">

            <li v-for="movie in movies"><!--ciclo-->

                <!--immagine copertina-->
                <img :src="`${imgConfig.baseImgUrl}${imgConfig.sizePoster}${movie.poster_path}`" :alt="movie.original_name">
                <!--/immagine copertina-->

                <!--informazioni-->
                <div class="informazioni">
                    <!--TITOLO ******-->
                    <div class="pad-b">
                        <h4>Titolo Originale</h4>
                        {{ movie.original_title }}
                    </div>

                    <div class="pad-b">
                        <h4>Titolo</h4>
                        {{ movie.title }}
                    </div>
                    <!--/TITOLO ******-->

                    <!--LINGUA ******-->
                    <div class="pad-b">
                        <h4>lingua</h4>

                        <div class="language" v-if="movie.original_language === 'it'"><!--1 condizione-->
                            <img :src="it" :alt="it">
                        </div>

                        <div class="language" v-if="movie.original_language === 'en'"><!--2 condizione-->
                            <img :src="en" :alt="en">

                        </div>
                        <div class="language"> <!--3 condizione-->
                            {{ movie.original_language }}
                        </div>
                    </div>
                    <!--/LINGUA ******-->

                    <!--VOTO-->
                    <div class="flex pad-b">
                        <h4>Voto: </h4>

                        <div class="pad-l star" v-for="i in 5">
                            <font-awesome-icon :icon="starVote(movie.vote_average, i)" />
                        </div>
                    </div>
                    <!--VOTO*****-->

                    <!--overwiew-->
                    <div class="flex">
                        <h4>Overwiew: </h4>
                        <div>
                            {{ movie.overview }}
                        </div>
                    </div>
                    <!--/overview-->

                </div>
                <!--/informazioni-->
            </li>

        </ul>

    </div>
    <!--/card-->

    <!--card-->
    <div class="card">

        <!--title-->
        <h2 class="title" v-if="series.length > 0">Serie TV</h2>
        <!--title-->

        <ul class="flex wrap">

            <li v-for="serie in series"><!--ciclo-->

                <!--immagine copertina-->
                <img :src="`${imgConfig.baseImgUrl}${imgConfig.sizePoster}${serie.poster_path}`" :alt="serie.original_name">
                <!--/immagine copertina-->

                <div class="informazioni">
                    <!--TITOLO ******-->
                    <div>
                        <h4>Titolo originale</h4>
                        {{ serie.original_name }}
                    </div>

                    <div>
                        <h4>titolo</h4>
                        {{ serie.name }}
                    </div>
                    <!--/TITOLO ******-->

                    <!--LINGUA ******-->
                    <div>
                        <h4>lingua</h4>

                        <div class="language" v-if="serie.original_language === 'it'"><!--1 condizione-->
                            <img :src="it" :alt="it">
                        </div>
                        <div class="language" v-if="serie.original_language === 'en'"><!--2 condizione-->
                            <img :src="en" :alt="en">
                        </div>
                        <div class="language"><!--3 condizione-->
                            {{ serie.original_language }}
                        </div>
                    </div>
                    <!--/LiNGUA ******-->

                    <!--VOTO-->
                    <div class="flex pad-b">
                        <h4>Voto: </h4>
                        <div class="star pad-l" v-for="i in 5">
                            <font-awesome-icon :icon="starVote(serie.vote_average, i)" />
                        </div>
                    </div>
                    <!--VOTO*****-->

                    <!--overwiew-->
                    <div class="flex">
                        <h4>Overwiew: </h4>
                        <div>
                            {{ serie.overview }}
                        </div>
                    </div>
                    <!--/overview-->
                </div>
            </li>

        </ul>
    </div>
    <!--/card-->
</template>

<style scoped lang="scss">
@import "../scss/general.scss";
@import "../scss/utils.scss";


.card {
    padding-bottom: 10px;


    .title {
        padding: .9375rem;
        border-bottom: 3px solid rgb(58, 56, 56);
        border-top: 3px solid rgb(58, 56, 56);
        color: red;
        font-weight: 700;
    }

    li {
        position: relative;
        margin: .9375rem .625rem;
        width: calc(100% / 5 - 20px);
        height: 21.875rem;
        object-fit: cover;

        img {
            width: 100%;
            height: 100%;
        }

        .informazioni {
            position: absolute;
            z-index: 2;
            top: 0;
            left: 0;
            background-color: rgba(0, 0, 0, 0.651);
            width: 100%;
            height: 100%;
            overflow: hidden;
            text-overflow: ellipsis ellipsis;
            opacity: 0;

            &:hover {
                opacity: 100%;
                transition: 0.5s;
            }

            .star {
                color: yellow;
            }
        }
    }

    .language {
        width: 2.1875rem;

        img {
            width: 100%;
        }
    }
}
</style>