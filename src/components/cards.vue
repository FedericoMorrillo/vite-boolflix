<script>
export default {
    props: ['movies', 'series'],
}
</script>

<template>
    <!--card-->
    <div class="card">

        <!--titolo-->
        <h2>FILMS</h2>
        <!--/titolo-->

        <ul v-for="movie in movies"> <!--ciclo-->

            <li>
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
                    {{ movie.original_language }}
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
        <h2>Serie TV</h2>
        <!--title-->

        <ul v-for="serie in series"> <!--ciclo-->

            <li>
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
                    {{ serie.original_language }}
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
}
</style>