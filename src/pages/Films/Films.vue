<template>
    <section class="page_section">
        <div class="page_title">
            <p>Filmes</p>
        </div>

        <div class="page_list_wrapp">
            <ul class="page_list">
                <li v-for="movie in movies" :key="movie.id" class="page_item">
                    <button class="page_button" @click="toggleWatchlist(movie)">
                        <span>{{ isInWatchlist(movie.id) ? "-" : "+" }}</span>
                        
                        <div :style="{backgroundImage: `url(${TMDB_IMAGE_URL_500}${movie.poster_path})`}"></div>
                    </button>
                </li>
            </ul>
        </div>
    </section>
</template>

<script setup>
    import { onMounted, ref } from "vue";
    import { API_KEY, BASE_URL, TMDB_IMAGE_URL_500 } from "@/config/tmdb"
    import { addMovie, removeMovie, isInWatchlist } from "@/config/watchlist"
    import "@/styles/page.css"

    const movies = ref([])

    async function getMovies() {
        let allMovies = []

        for(let page = 1; page <= 10; page++) {
            let response = await fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}&page=${page}`)
            let data = await response.json()

            allMovies.push(... data.results)
        }

        movies.value = allMovies
    }

    function toggleWatchlist(movie) {
        if (isInWatchlist(movie.id)) {
            removeMovie(movie.id)
        } else {
            addMovie(movie)
        }
    }

    onMounted(() => {
        getMovies()
    })
</script>

<style></style>
