<template>
    <section>
        <ul>
            <li
                v-for="movie in movies"
                :key="movie.id"
            >
                
            </li>
        </ul>

        <ul>
            <li
                v-for="movie in movies"
                :key="movie.id"
            >
                <img v-if="movie.poster_path" :src="`${TMDB_IMAGE_URL_100}${movie.poster_path}`" :alt="movie.title">
            </li>
        </ul>
    </section>
</template>

<script setup>
    import { ref, onMounted } from 'vue'

    const API_KEY = "129b3b33196209a2f32976644976b80a"
    const BASE_URL = "https://api.themoviedb.org/3"
    const TMDB_IMAGE_URL_500 = "https://image.tmdb.org/t/p/w500"
    const TMDB_IMAGE_URL_100 = "https://image.tmdb.org/t/p/w200"

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

        genres.value = userData.results
    }

    onMounted(() => {
        getPopularMovies()
        getGenres()
    })
</script>

<style>
    
</style>
