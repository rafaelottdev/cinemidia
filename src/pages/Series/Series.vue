<template>
     <section class="page_section">
        <div class="page_title">
            <p>Séries</p>
        </div>

        <div class="page_list_wrapp">
            <ul class="page_list">
                <li v-for="serie in series" :key="serie.id" class="page_item">
                    <button class="page_button" @click="toggleWatchlist(serie)">
                        <span>{{ isInWatchlist(serie.id) ? "-" : "+" }}</span>
                        
                        <div :style="{backgroundImage: `url(${TMDB_IMAGE_URL_500}${serie.poster_path})`}"></div>
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

    const series = ref([])

    async function getSeries() {
        let allSeries = []

        for(let page = 1; page <= 10; page++) {
            let response = await fetch(`${BASE_URL}/discover/tv?api_key=${API_KEY}&page=${page}`)
            let data = await response.json()

            allSeries.push(... data.results)
        }

        series.value = allSeries
    }

    function toggleWatchlist(movie) {
        if (isInWatchlist(movie.id)) {
            removeMovie(movie.id)
        } else {
            addMovie(movie)
        }
    }

    onMounted(() => {
        getSeries()
    })
</script>

<style></style>
