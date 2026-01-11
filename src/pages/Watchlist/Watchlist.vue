<template>
    <section class="page_section">
        <div class="page_title">
            <p>WatchList</p>
        </div>

        <div class="page_list_wrapp">
            <ul class="page_list">
                <li v-for="movie in watchlist" :key="movie.id" class="page_item">
                    <button class="page_button" @click="removeMovie(movie.id)">
                        <span>-</span>
                        
                        <div :style="{backgroundImage: `url(${TMDB_IMAGE_URL_500}${movie.poster_path})`}"></div>
                    </button>
                </li>
            </ul>
        </div>
    </section>
</template>

<script setup>
    import { API_KEY, BASE_URL, TMDB_IMAGE_URL_500 } from "@/config/tmdb"
    import { watchlist, addMovie, removeMovie, isInWatchlist } from "@/config/watchlist"
    import "@/styles/page.css"
</script>

<style scoped></style>
