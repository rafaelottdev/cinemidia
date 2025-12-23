<template>
    <section class="home_section">
        <div>
            <ul class="cover_list">
                <li
                    v-for="movie in movies.slice(0, 8)"
                    :key="movie.id"
                    class="cover_container"
                >
                    <div class="movie_info">
                        <h1>{{ movie.title }}</h1>

                        <div class="movie_stats">
                            <p>{{ movie.vote_average }}</p>

                            <ul>
                                <li>
                                    {{ getGenreNames(movie.genre_ids).join(', ') }}
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="cover_wrapp">
                        <img v-if="movie.backdrop_path" :src="`${TMDB_IMAGE_URL_500}${movie.backdrop_path}`" :alt="movie.title">
                    </div>
                </li>
            </ul>

            <ul class="poster_list">
                <li
                    v-for="movie in movies.slice(0, 8)"
                    :key="movie.id"
                    class="poster_container"
                >
                    <img v-if="movie.poster_path" :src="`${TMDB_IMAGE_URL_200}${movie.poster_path}`" :alt="movie.title">
                </li>
            </ul>
        </div>

        <div class="slider_controller_container">
            <buttons class="left_controller"></buttons>

            <buttons class="right_controller"></buttons>
        </div>
    </section>
</template>

<script setup>
    import { ref, onMounted, computed } from 'vue'

    const API_KEY = "129b3b33196209a2f32976644976b80a"
    const BASE_URL = "https://api.themoviedb.org/3"
    const TMDB_IMAGE_URL_500 = "https://image.tmdb.org/t/p/w500"
    const TMDB_IMAGE_URL_200 = "https://image.tmdb.org/t/p/w200"

    const movies = ref([])
    const genres = ref([])

    async function getPopularMovies() {
        let response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=pt-BR`)
        let userData = await response.json()

        movies.value = userData.results
    }

    async function getGenres() {
        let response = await fetch(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=pt-BR`)
        let userData = await response.json()

        genres.value = userData.genres
    }

    function getGenreNames(ids) {
        return genres.value
            .filter(genre => ids.includes(genre.id))
            .map(genre => genre.name)
    }

    onMounted(() => {
        getPopularMovies()
        getGenres()
    })
</script>

<style>
    .home_section {
        background-color: red;
    }

    .cover_list {

    }

    .cover_container {

    }

    .movie_info {

    }

    .movie_stats {

    }

    .cover_wrapp {

    }

    .poster_list {

    }

    .poster_container {

    }

    .slider_controller_container {

    }

    .left_controller {

    }

    .right_controller {

    }
</style>
