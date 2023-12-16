<script>
export default {
    // i due array ottenuti
    props: ['movies', 'series'],
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
    }
}
</script>

<template>
    <!--card-->
    <div class="card">

        <!--titolo-->
        <h2 v-if="movies.length > 0">FILMS</h2>
        <!--/titolo-->

        <ul>

            <li v-for="movie in movies"><!--ciclo-->

                <!--immagine copertina-->
                <img :src="`${imgConfig.baseImgUrl}${imgConfig.sizePoster}${movie.poster_path}`" :alt="movie.original_name">
                <!--/immagine copertina-->

                <!--Titolo ******-->
                <div>
                    <h4>Titolo Originale</h4>
                    {{ movie.original_title }}
                </div>

                <div>
                    <h4>Titolo</h4>
                    {{ movie.title }}
                </div>
                <!--/Titolo ******-->

                <!--Lingua ******-->
                <div>
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
                <!--/Lingua ******-->

                <!--Voto-->
                <div>
                    <h4>voto</h4>
                    {{ movie.vote_average }}
                </div>
                <!--Voto*****-->
            </li>

        </ul>

    </div>
    <!--/card-->

    <!--card-->
    <div class="card">

        <!--title-->
        <h2 v-if="series.length > 0">Serie TV</h2>
        <!--title-->

        <ul>

            <li v-for="serie in series"><!--ciclo-->

                <!--immagine copertina-->
                <img :src="`${imgConfig.baseImgUrl}${imgConfig.sizePoster}${serie.poster_path}`" :alt="serie.original_name">
                <!--/immagine copertina-->

                <!--Titolo ******-->
                <div>
                    <h4>Titolo originale</h4>
                    {{ serie.original_name }}
                </div>

                <div>
                    <h4>titolo</h4>
                    {{ serie.name }}
                </div>
                <!--/Titolo ******-->

                <!--Lingua ******-->
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
                <!--/Lingua ******-->

                <!--Voto-->
                <div>
                    <h4>voto</h4>
                    {{ serie.vote_average }}
                </div>
                <!--Voto*****-->
            </li>

        </ul>
    </div>
    <!--/card-->
</template>

<style scoped lang="scss">
.card {
    padding-bottom: 10px;

    .language {
        width: 2.1875rem;

        img {
            width: 100%;
        }
    }
}
</style>